// Three.js interactive grid background for hero section
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGrid);
} else {
    initGrid();
}

function initGrid() {
    try {
        const hero = document.querySelector('.hero');
        if (!hero) {
            console.error('Hero section not found');
            return;
        }
        
        const width = hero.offsetWidth;
        const height = hero.offsetHeight;

        // Create renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setClearColor(0x000000, 0); // transparent
        renderer.setSize(width, height);
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = 0;
        renderer.domElement.style.left = 0;
        renderer.domElement.style.pointerEvents = 'none';
        renderer.domElement.style.zIndex = '1';
        hero.appendChild(renderer.domElement);

        // Create scene and camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.z = 50;

        // Grid parameters
        let gridRows = 40; // increased from 16
        let gridCols = 80; // increased from 32
        const spacing = 1.2; // closer together
        let points = [];
        let geometry, material, pointCloud, positions, basePositions;

        function createGrid() {
            // Remove old pointCloud if it exists
            if (pointCloud) {
                scene.remove(pointCloud);
                geometry.dispose();
                material.dispose();
            }
            points = [];
            positions = [];
            basePositions = [];
            geometry = new THREE.BufferGeometry();
            for (let y = 0; y < gridRows; y++) {
                for (let x = 0; x < gridCols; x++) {
                    // Center grid so (0,0) is at the center of the hero section
                    const px = (x - (gridCols - 1) / 2) * spacing;
                    const py = (y - (gridRows - 1) / 2) * spacing;
                    positions.push(px, py, 0);
                    basePositions.push(px, py, 0);
                    points.push({ x: px, y: py, z: 0 });
                }
            }
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, opacity: 0.5, transparent: true });
            pointCloud = new THREE.Points(geometry, material);
            scene.add(pointCloud);
        }

        // Initial grid creation
        createGrid();

        // Mobile detection
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                         (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
                         window.innerWidth <= 768;

        // Mouse interaction for desktop
        let mouse = { x: 0, y: 0 };
        let effectActive = false;
        
        if (!isMobile) {
            window.addEventListener('mousemove', (e) => {
                const rect = hero.getBoundingClientRect();
                // Use rect.width/height for correct scaling, not hero.offsetWidth/offsetHeight
                mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
                
                // we turn on on first mouse movement
                if (!effectActive) {
                    effectActive = true;
                }
            });
        }

        function animate() {
            const pos = geometry.attributes.position.array;
            const time = Date.now() * 0.001;
            
            for (let i = 0; i < points.length; i++) {
                if (isMobile) {
                    // Mobile - a "jiggle" animation
                    const jiggleAmplitude = 0.1;
                    const jiggleSpeed = 0.5;
                    const offsetX = (Math.sin(time * jiggleSpeed + i * 0.1) + Math.cos(time * jiggleSpeed * 0.7 + i * 0.2)) * jiggleAmplitude;
                    const offsetY = (Math.cos(time * jiggleSpeed * 0.8 + i * 0.15) + Math.sin(time * jiggleSpeed * 1.2 + i * 0.25)) * jiggleAmplitude;
                    
                    pos[i * 3] = basePositions[i * 3] + offsetX;
                    pos[i * 3 + 1] = basePositions[i * 3 + 1] + offsetY;
                } else if (effectActive) {
                    // Desktop - mouse interaction (only when effect is active)
                    // Project mouse to grid space using correct grid size
                    const mx = mouse.x * ((gridCols - 1) * spacing) / 2;
                    const my = mouse.y * ((gridRows - 1) * spacing) / 2;
                    const dx = basePositions[i * 3] - mx;
                    const dy = basePositions[i * 3 + 1] - my;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    // Push effect - centered under cursor, follows 1:1
                    if (dist < 8) {
                        const force = (8 - dist) * 0.7;
                        pos[i * 3] = basePositions[i * 3] + (mx - basePositions[i * 3]) * (force / 8);
                        pos[i * 3 + 1] = basePositions[i * 3 + 1] + (my - basePositions[i * 3 + 1]) * (force / 8);
                    } else {
                        // Return to base
                        pos[i * 3] += (basePositions[i * 3] - pos[i * 3]) * 0.08;
                        pos[i * 3 + 1] += (basePositions[i * 3 + 1] - pos[i * 3 + 1]) * 0.08;
                    }
                } else {
                    // Desktop - Keep points at base positions until effect is activated
                    pos[i * 3] = basePositions[i * 3];
                    pos[i * 3 + 1] = basePositions[i * 3 + 1];
                }
            }
            geometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        function resizeGrid() {
            const width = hero.offsetWidth;
            const height = hero.offsetHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            createGrid();
        }

        window.addEventListener('resize', resizeGrid);

        // After hero & renderer are created we call resizeGrid to ensure correct initial sizing
        resizeGrid();

        console.log('Three.js grid initialised successfully');
    } catch (error) {
        console.error('Error initialising Three.js grid:', error);
    }
}