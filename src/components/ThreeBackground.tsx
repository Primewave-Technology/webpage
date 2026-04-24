import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xf59e0b, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.2 
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    const pointsGeometry = new THREE.IcosahedronGeometry(2.05, 1);
    const pointsMaterial = new THREE.PointsMaterial({ 
      color: 0xd97706, 
      size: 0.03,
      transparent: true,
      opacity: 0.4
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);
    pointsRef.current = points;

    camera.position.z = 5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      if (meshRef.current) {
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.0015;
        
        meshRef.current.position.x += (mouseRef.current.x - meshRef.current.position.x) * 0.02;
        meshRef.current.position.y += (-mouseRef.current.y - meshRef.current.position.y) * 0.02;
      }

      if (pointsRef.current) {
        pointsRef.current.rotation.x += 0.001;
        pointsRef.current.rotation.y += 0.0015;
        pointsRef.current.position.x = meshRef.current?.position.x || 0;
        pointsRef.current.position.y = meshRef.current?.position.y || 0;
      }

      renderer.render(scene, camera);
    };

    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 opacity-40 pointer-events-none"
      id="canvas-container"
    />
  );
};
