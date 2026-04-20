import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with fog for depth
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.0015);
    sceneRef.current = scene;

    // Camera with dramatic perspective
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 100);

    // Renderer with enhanced settings
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Color palette matching theme
    const colors = [
      new THREE.Color(0x6366f1), // indigo
      new THREE.Color(0x8b5cf6), // purple
      new THREE.Color(0xec4899), // pink
      new THREE.Color(0xa78bfa), // light purple
      new THREE.Color(0xc084fc), // violet
    ];

    // Create particle system with depth
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);
    const velocities = [];
    const particleColors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Spread particles in 3D space with depth
      posArray[i3] = (Math.random() - 0.5) * 200;
      posArray[i3 + 1] = (Math.random() - 0.5) * 200;
      posArray[i3 + 2] = (Math.random() - 0.5) * 200;

      // Varied velocities for dynamic movement
      velocities.push({
        x: (Math.random() - 0.5) * 0.1,
        y: (Math.random() - 0.5) * 0.1,
        z: (Math.random() - 0.5) * 0.1,
      });

      // Random colors
      const color = colors[Math.floor(Math.random() * colors.length)];
      particleColors[i3] = color.r;
      particleColors[i3 + 1] = color.g;
      particleColors[i3 + 2] = color.b;

      // Varied sizes for depth perception
      sizes[i] = Math.random() * 2 + 0.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Enhanced particle material with glow
    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create glowing geometric shapes floating in 3D space
    const geometries = [
      new THREE.OctahedronGeometry(3, 0),
      new THREE.TetrahedronGeometry(3, 0),
      new THREE.IcosahedronGeometry(3, 0),
      new THREE.TorusGeometry(2, 0.5, 16, 100),
    ];

    const shapes = [];
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const material = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position in 3D space with depth
      mesh.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      const scale = Math.random() * 1.5 + 0.5;
      mesh.scale.set(scale, scale, scale);

      shapes.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.03 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 30 + 20,
        orbitSpeed: (Math.random() - 0.5) * 0.01,
      });

      scene.add(mesh);
    }

    // Create connecting lines between nearby particles for network effect
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    const maxConnections = 3;
    const connectionDistance = 25;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particlesCount * maxConnections * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera movement based on mouse
      targetCameraX += (mouseX * 15 - targetCameraX) * 0.05;
      targetCameraY += (mouseY * 15 - targetCameraY) * 0.05;
      
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.lookAt(scene.position);

      // Rotate entire particle system for depth effect
      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      // Animate individual particles with 3D movement
      const positions = particlesGeometry.attributes.position.array;
      let lineIndex = 0;
      const linePositionsArray = lineGeometry.attributes.position.array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Move particles in 3D space
        positions[i3] += velocities[i].x;
        positions[i3 + 1] += velocities[i].y;
        positions[i3 + 2] += velocities[i].z;

        // Add wave motion for organic feel
        positions[i3 + 1] += Math.sin(elapsedTime + positions[i3] * 0.01) * 0.05;
        positions[i3 + 2] += Math.cos(elapsedTime + positions[i3 + 1] * 0.01) * 0.05;

        // Boundary check with smooth wrap
        if (Math.abs(positions[i3]) > 100) velocities[i].x *= -1;
        if (Math.abs(positions[i3 + 1]) > 100) velocities[i].y *= -1;
        if (Math.abs(positions[i3 + 2]) > 100) velocities[i].z *= -1;

        // Connect nearby particles
        let connections = 0;
        for (let j = i + 1; j < particlesCount && connections < maxConnections; j++) {
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < connectionDistance) {
            linePositionsArray[lineIndex++] = positions[i3];
            linePositionsArray[lineIndex++] = positions[i3 + 1];
            linePositionsArray[lineIndex++] = positions[i3 + 2];
            linePositionsArray[lineIndex++] = positions[j3];
            linePositionsArray[lineIndex++] = positions[j3 + 1];
            linePositionsArray[lineIndex++] = positions[j3 + 2];
            connections++;
          }
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      // Animate geometric shapes with complex 3D motion
      shapes.forEach((shape, index) => {
        // Rotation
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;
        
        // Orbital motion in 3D
        const orbitAngle = elapsedTime * shape.orbitSpeed + shape.floatOffset;
        shape.mesh.position.x += Math.cos(orbitAngle) * 0.1;
        shape.mesh.position.z += Math.sin(orbitAngle) * 0.1;
        
        // Floating animation
        shape.mesh.position.y += Math.sin(elapsedTime * shape.floatSpeed + shape.floatOffset) * 0.05;
        
        // Pulse opacity for breathing effect
        shape.mesh.material.opacity = 0.3 + Math.sin(elapsedTime * 2 + shape.floatOffset) * 0.15;
        
        // Scale pulse
        const scalePulse = 1 + Math.sin(elapsedTime * 1.5 + index) * 0.1;
        shape.mesh.scale.setScalar(scalePulse);
      });

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose all resources
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      
      shapes.forEach((shape) => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
