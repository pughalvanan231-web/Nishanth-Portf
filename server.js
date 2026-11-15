const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

let PORT = parseInt(process.env.PORT, 10) || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.wasm': 'application/wasm',
  '.ktx2': 'image/ktx2',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json'
};

const server = http.createServer((req, res) => {
  // CORS Headers for all local responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = url.pathname;

  // 1. Proxy /v5/ WebGL & 3D Assets directly to itsoffbrand CDN with streaming
  if (pathname.startsWith('/v5/')) {
    const targetUrl = `https://autopilot.itsoffbrand.io${pathname}`;
    https.get(targetUrl, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, {
        ...proxyRes.headers,
        'access-control-allow-origin': '*',
        'access-control-allow-headers': '*'
      });
      proxyRes.pipe(res);
    }).on('error', (err) => {
      console.error(`Proxy error for ${targetUrl}:`, err.message);
      res.writeHead(502);
      res.end('Proxy Error');
    });
    return;
  }

  // 2. Proxy /api/ to autopilot-hazel API
  if (pathname.startsWith('/api/')) {
    const targetUrl = `https://autopilot-hazel.vercel.app${pathname}${url.search}`;
    https.get(targetUrl, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, {
        ...proxyRes.headers,
        'access-control-allow-origin': '*'
      });
      proxyRes.pipe(res);
    }).on('error', (err) => {
      console.error(`Proxy error for ${targetUrl}:`, err.message);
      res.writeHead(502);
      res.end('Proxy Error');
    });
    return;
  }

  // 3. Serve Local Static Files
  if (pathname === '/') {
    pathname = '/index.html';
  }

  const ext = path.extname(pathname).toLowerCase();
  let filePath = path.join(__dirname, pathname);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If requesting a static asset (has extension like .js, .wasm, .css, .png, etc.), return 404 instead of index.html
      if (ext && ext !== '.html') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
      }
      // Only fallback to index.html for client-side navigation routes
      filePath = path.join(__dirname, 'index.html');
    }

    const finalExt = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[finalExt] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

function startServer(portToTry) {
  server.listen(portToTry, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Autopilot 1:1 Mirror Server Running!`);
    console.log(`📡 URL: http://localhost:${portToTry}`);
    console.log(`🎮 3D WebGL / KTX2 / WASM Proxy: Active on /v5/`);
    console.log(`======================================================\n`);
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} in use, trying port ${PORT + 1}...`);
    PORT += 1;
    startServer(PORT);
  } else {
    console.error('Server error:', err);
  }
});

startServer(PORT);
