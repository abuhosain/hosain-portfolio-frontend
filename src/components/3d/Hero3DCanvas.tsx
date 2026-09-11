"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.8);

    // 2. High-performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Central Quantum Polyhedron Core (Vivid & Highly Visible)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0.1, 0);
    scene.add(coreGroup);

    // Outer Icosahedron wireframe
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerCore);

    // Inner Dodecahedron Core
    const innerGeo = new THREE.DodecahedronGeometry(1.25, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // Central Glowing Nucleus
    const nucleusGeo = new THREE.SphereGeometry(0.42, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.85,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleus);

    // 4. Triple Gyroscopic Gimbal Rings
    const ring1Geo = new THREE.RingGeometry(2.8, 2.83, 90);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.32,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.RingGeometry(3.2, 3.23, 90);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.28,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    const ring3Geo = new THREE.RingGeometry(3.6, 3.63, 90);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring3);

    // 5. 1,200+ Floating Cosmic Particles
    const particleCount = 1200;
    const basePositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(0x00f0ff);
    const purple = new THREE.Color(0x8b5cf6);
    const emerald = new THREE.Color(0x10b981);
    const amber = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      currentPositions[i * 3] = x;
      currentPositions[i * 3 + 1] = y;
      currentPositions[i * 3 + 2] = z;

      const pickColor = i % 4 === 0 ? cyan : i % 4 === 1 ? purple : i % 4 === 2 ? emerald : amber;
      colors[i * 3] = pickColor.r;
      colors[i * 3 + 1] = pickColor.g;
      colors[i * 3 + 2] = pickColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Physics Coordinates
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let shockwavePower = 0;
    let speedMultiplier = 1.0;

    const handleMouseMove = (e: MouseEvent) => {
      const w2 = window.innerWidth / 2;
      const h2 = window.innerHeight / 2;
      targetX = (e.clientX - w2) * 0.0008;
      targetY = (e.clientY - h2) * 0.0008;
    };

    const triggerShockwave = () => {
      shockwavePower = 2.4;
      speedMultiplier = 2.8;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", triggerShockwave);

    const handleCustomShockwave = () => triggerShockwave();
    window.addEventListener("hero:pulse_core", handleCustomShockwave);

    // Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime() * speedMultiplier;

      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (speedMultiplier > 1.0) speedMultiplier -= 0.02;
      if (shockwavePower > 0) shockwavePower -= 0.04;

      // Rotate structures
      coreGroup.rotation.x = elapsed * 0.14 + currentY * 2;
      coreGroup.rotation.y = elapsed * 0.18 + currentX * 2;

      innerCore.rotation.x = -elapsed * 0.22 - currentY * 1.6;
      innerCore.rotation.y = -elapsed * 0.28 - currentX * 1.6;

      const breathe = 1 + Math.sin(elapsed * 2) * 0.06 + shockwavePower * 0.2;
      nucleus.scale.set(breathe, breathe, breathe);

      ring1.rotation.z = elapsed * 0.12;
      ring2.rotation.x = elapsed * 0.09;
      ring3.rotation.y = -elapsed * 0.1;

      particles.rotation.y = elapsed * 0.05 + currentX;
      particles.rotation.x = elapsed * 0.03 + currentY;

      const pos = particleGeo.attributes.position.array as Float32Array;
      if (shockwavePower > 0.01) {
        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;
          pos[idx] = basePositions[idx] * (1 + shockwavePower * 0.38);
          pos[idx + 1] = basePositions[idx + 1] * (1 + shockwavePower * 0.38);
          pos[idx + 2] = basePositions[idx + 2] * (1 + shockwavePower * 0.38);
        }
        particleGeo.attributes.position.needsUpdate = true;
      } else {
        for (let i = 0; i < particleCount; i += 5) {
          const idx = i * 3;
          pos[idx + 1] = basePositions[idx + 1] + Math.sin(elapsed * 2 + i) * 0.06;
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.hex) {
        const hexColor = new THREE.Color(customEvent.detail.hex);
        outerMat.color.set(hexColor);
        nucleusMat.color.set(hexColor);
        ring1Mat.color.set(hexColor);
        ring3Mat.color.set(hexColor);
        
        const colorAttr = particleGeo.attributes.color as THREE.BufferAttribute;
        if (colorAttr) {
          const cArr = colorAttr.array as Float32Array;
          for (let i = 0; i < particleCount; i += 2) {
            cArr[i * 3] = hexColor.r;
            cArr[i * 3 + 1] = hexColor.g;
            cArr[i * 3 + 2] = hexColor.b;
          }
          colorAttr.needsUpdate = true;
        }
      }
    };

    window.addEventListener("theme:change", handleThemeChange);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", triggerShockwave);
      window.removeEventListener("hero:pulse_core", handleCustomShockwave);
      window.removeEventListener("theme:change", handleThemeChange);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
}

export default Hero3DCanvas;
