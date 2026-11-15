import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Particle Stars
    const starsCount = 1200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    const starColors = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 60;
      starPositions[i + 1] = (Math.random() - 0.5) * 60;
      starPositions[i + 2] = (Math.random() - 0.5) * 60;

      // Subtle cyan/blue/white tints
      const tint = Math.random();
      if (tint > 0.8) {
        starColors[i] = 0.0;
        starColors[i + 1] = 0.9;
        starColors[i + 2] = 1.0;
      } else if (tint > 0.6) {
        starColors[i] = 0.4;
        starColors[i + 1] = 0.6;
        starColors[i + 2] = 1.0;
      } else {
        starColors[i] = 0.85;
        starColors[i + 1] = 0.85;
        starColors[i + 2] = 0.85;
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // Cyber Geometric Ring Array (Cockpit / Telemetry Instrument Motif)
    const ringsGroup = new THREE.Group();
    const ringRadii = [3.2, 4.4, 5.8, 7.5];

    ringRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.02, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0x00e5ff : 0x2563eb,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12 - idx * 0.02,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.3;
      ring.rotation.y = (idx * Math.PI) / 8;
      ringsGroup.add(ring);
    });

    // Holographic Wireframe Icosahedron Core
    const icoGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const coreMesh = new THREE.Mesh(icoGeo, icoMat);
    ringsGroup.add(coreMesh);

    // Dynamic floating telemetry nodes
    const nodesCount = 18;
    const nodesGroup = new THREE.Group();
    for (let i = 0; i < nodesCount; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const theta = (i / nodesCount) * Math.PI * 2;
      const r = 4.2;
      node.position.set(Math.cos(theta) * r, (Math.sin(i * 1.5) * 0.8), Math.sin(theta) * r);
      nodesGroup.add(node);
    }
    ringsGroup.add(nodesGroup);
    ringsGroup.position.set(0, -1.5, -2);
    scene.add(ringsGroup);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(60, 40, 0x333333, 0x111111);
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 2;
      targetY = (y - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ringsGroup.rotation.y = elapsedTime * 0.08 + mouseX * 0.5;
      ringsGroup.rotation.x = mouseY * 0.25;
      coreMesh.rotation.y = -elapsedTime * 0.12;
      coreMesh.rotation.z = elapsedTime * 0.05;

      starPoints.rotation.y = elapsedTime * 0.015;
      starPoints.rotation.x = mouseX * 0.05;

      camera.position.x = mouseX * 1.5;
      camera.position.y = -mouseY * 1.0;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true" 
    />
  );
}
