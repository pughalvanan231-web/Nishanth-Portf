const fs = require('fs');
const code = fs.readFileSync('vendor/chunk-ztstc82m.js', 'utf-8');

const regex = /[^\s'"`,\(\);]+(?:loader_character|preloader)[^\s'"`,\(\);]*/gi;
const matches = new Set(code.match(regex) || []);
console.log('Matches:', Array.from(matches));

const lines = code.split(';');
lines.forEach(l => {
  if (l.includes('loader_character') || (l.includes('videos') && l.includes('preloader'))) {
    console.log('\nVideo line:');
    console.log(l.substring(0, 300));
  }
});
