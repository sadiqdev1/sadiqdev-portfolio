import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with dramatic fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0f, 1, 400);
    sceneRef.current = scene;

    // Camera with cinematic perspective
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 200);

    // Renderer with premium settings
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Color palette
    const colors = [
      new THREE.Color(0x6366f1), // indigo
      new THREE.Color(0x8b5cf6), // purple
      new THREE.Color(0xec4899), // pink
      new THREE.Color(0xa78bfa), // light purple
      new THREE.Color(0xc084fc), // violet
      new THREE.Color(0x60a5fa), // blue
    ];

    // ============================================
    // PARTICLE SYSTEM - FLOWING & SWIRLING
    // ============================================
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    const velocities = [];
    const particleColors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    const phases = [];

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Distribute in spiral formation
      const radius = Math.random() * 150 + 50;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 200;
      
      posArray[i3] = Math.cos(angle) * radius;
      posArray[i3 + 1] = height;
      posArray[i3 + 2] = Math.sin(angle) * radius;

      // Spiral velocities
      velocities.push({
        angle: angle,
        radius: radius,
        speed: Math.random() * 0.04 + 0.02, // Faster spiral
        verticalSpeed: (Math.random() - 0.5) * 0.5, // Faster vertical movement
      });

      // Random phase for wave motion
      phases.push(Math.random() * Math.PI * 2);

      // Gradient colors
      const color = colors[Math.floor(Math.random() * colors.length)];
      particleColors[i3] = color.r;
      particleColors[i3 + 1] = color.g;
      particleColors[i3 + 2] = color.b;

      // Varied sizes
      sizes[i] = Math.random() * 3 + 1;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 3, // Bigger particles
      vertexColors: true,
      transparent: true,
      opacity: 0.9, // More visible
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // ============================================
    // GLOWING GEOMETRIC SHAPES - FLOATING
    // ============================================
    const geometries = [
      new THREE.OctahedronGeometry(4, 0),
      new THREE.TetrahedronGeometry(4, 0),
      new THREE.IcosahedronGeometry(4, 0),
      new THREE.TorusGeometry(3, 1, 16, 100),
      new THREE.TorusKnotGeometry(3, 0.8, 100, 16),
    ];

    const shapes = [];
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const material = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position in 3D space
      const angle = (i / 15) * Math.PI * 2;
      const radius = 80 + Math.random() * 60;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 150,
        Math.sin(angle) * radius
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      const scale = Math.random() * 1.5 + 0.8;
      mesh.scale.set(scale, scale, scale);

      shapes.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.03,
          y: (Math.random() - 0.5) * 0.03,
          z: (Math.random() - 0.5) * 0.03,
        },
        orbitAngle: angle,
        orbitRadius: radius,
        orbitSpeed: (Math.random() - 0.5) * 0.008,
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatAmplitude: Math.random() * 20 + 10,
      });

      scene.add(mesh);
    }

    // ============================================
    // ENERGY WAVES - RIPPLE EFFECT
    // ============================================
    const waveGeometry = new THREE.RingGeometry(10, 12, 64);
    const waves = [];
    
    for (let i = 0; i < 3; i++) {
      const waveMaterial = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      
      const wave = new THREE.Mesh(waveGeometry, waveMaterial);
      wave.rotation.x = Math.PI / 2;
      wave.position.y = (i - 1) * 50;
      
      waves.push({
        mesh: wave,
        speed: 0.02 + i * 0.01,
        maxScale: 15 + i * 5,
      });
      
      scene.add(wave);
    }

    // ============================================
    // CONNECTING LINES - NEURAL NETWORK
    // ============================================
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const maxConnections = 2;
    const connectionDistance = 40;
    const lineGeometry = new THREE.BufferGeometry();
    const maxLines = particlesCount * maxConnections;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // ============================================
    // MOUSE INTERACTION
    // ============================================
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ============================================
    // ANIMATION LOOP - THE MAGIC HAPPENS HERE
    // ============================================
    let startTime = Date.now();
    
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = (Date.now() - startTime) / 1000; // Convert to seconds

      // Smooth camera movement
      targetCameraX += (mouseX * 30 - targetCameraX) * 0.05;
      targetCameraY += (mouseY * 30 - targetCameraY) * 0.05;
      
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.lookAt(scene.position);

      // PARTICLES - SPIRAL & FLOW MOTION
      const positions = particlesGeometry.attributes.position.array;
      const particleColorsArray = particlesGeometry.attributes.color.array;
      let lineIndex = 0;
      const linePositionsArray = lineGeometry.attributes.position.array;
      const lineColorsArray = lineGeometry.attributes.color.array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const velocity = velocities[i];

        // Spiral motion
        velocity.angle += velocity.speed;
        velocity.radius += Math.sin(elapsedTime * 0.5 + phases[i]) * 0.2;

        // Update position with spiral + wave
        positions[i3] = Math.cos(velocity.angle) * velocity.radius + Math.sin(elapsedTime + phases[i]) * 15;
        positions[i3 + 1] += velocity.verticalSpeed;
        positions[i3 + 2] = Math.sin(velocity.angle) * velocity.radius + Math.cos(elapsedTime + phases[i]) * 15;

        // Add turbulence - MORE DRAMATIC
        positions[i3] += Math.sin(elapsedTime * 3 + i * 0.1) * 1.5;
        positions[i3 + 2] += Math.cos(elapsedTime * 3 + i * 0.1) * 1.5;

        // Wrap around vertically
        if (positions[i3 + 1] > 100) positions[i3 + 1] = -100;
        if (positions[i3 + 1] < -100) positions[i3 + 1] = 100;

        // Keep radius in bounds
        if (velocity.radius > 200) velocity.radius = 50;
        if (velocity.radius < 30) velocity.radius = 150;

        // Color pulsing - keep original colors
        const originalColor = colors[i % colors.length];
        const colorPulse = Math.sin(elapsedTime * 2 + i * 0.1) * 0.3 + 0.7;
        particleColorsArray[i3] = originalColor.r * colorPulse;
        particleColorsArray[i3 + 1] = originalColor.g * colorPulse;
        particleColorsArray[i3 + 2] = originalColor.b * colorPulse;

        // Connect nearby particles
        let connections = 0;
        for (let j = i + 1; j < particlesCount && connections < maxConnections; j++) {
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < connectionDistance) {
            // Line positions
            linePositionsArray[lineIndex * 6] = positions[i3];
            linePositionsArray[lineIndex * 6 + 1] = positions[i3 + 1];
            linePositionsArray[lineIndex * 6 + 2] = positions[i3 + 2];
            linePositionsArray[lineIndex * 6 + 3] = positions[j3];
            linePositionsArray[lineIndex * 6 + 4] = positions[j3 + 1];
            linePositionsArray[lineIndex * 6 + 5] = positions[j3 + 2];

            // Line colors (gradient)
            const opacity = 1 - (distance / connectionDistance);
            lineColorsArray[lineIndex * 6] = particleColorsArray[i3] * opacity;
            lineColorsArray[lineIndex * 6 + 1] = particleColorsArray[i3 + 1] * opacity;
            lineColorsArray[lineIndex * 6 + 2] = particleColorsArray[i3 + 2] * opacity;
            lineColorsArray[lineIndex * 6 + 3] = particleColorsArray[j3] * opacity;
            lineColorsArray[lineIndex * 6 + 4] = particleColorsArray[j3 + 1] * opacity;
            lineColorsArray[lineIndex * 6 + 5] = particleColorsArray[j3 + 2] * opacity;

            lineIndex++;
            connections++;
          }
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.color.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex * 2);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      // GEOMETRIC SHAPES - ORBITAL MOTION
      shapes.forEach((shape) => {
        // Complex rotation
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;
        
        // Orbital motion
        shape.orbitAngle += shape.orbitSpeed;
        shape.mesh.position.x = Math.cos(shape.orbitAngle) * shape.orbitRadius;
        shape.mesh.position.z = Math.sin(shape.orbitAngle) * shape.orbitRadius;
        
        // Floating
        shape.mesh.position.y += Math.sin(elapsedTime * shape.floatSpeed) * 0.1;
        
        // Pulse opacity
        shape.mesh.material.opacity = 0.3 + Math.sin(elapsedTime * 3) * 0.2;
        
        // Scale pulse
        const scalePulse = 1 + Math.sin(elapsedTime * 2) * 0.15;
        shape.mesh.scale.setScalar(scalePulse);
      });

      // ENERGY WAVES - EXPANDING RIPPLES
      waves.forEach((wave, index) => {
        const scale = 1 + (Math.sin(elapsedTime * wave.speed + index) * 0.5 + 0.5) * wave.maxScale;
        wave.mesh.scale.set(scale, scale, 1);
        
        const opacity = 0.3 - (scale / wave.maxScale) * 0.25;
        wave.mesh.material.opacity = Math.max(0.05, opacity);
        
        wave.mesh.rotation.z += 0.001;
      });

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
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
      
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      waveGeometry.dispose();
      
      shapes.forEach((shape) => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });
      
      waves.forEach((wave) => {
        wave.mesh.geometry.dispose();
        wave.mesh.material.dispose();
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
