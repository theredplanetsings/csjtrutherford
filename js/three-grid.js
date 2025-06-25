// Three.js interactive grid background for hero section
import * as THREE from './three.module.js';

const hero = document.querySelector('.hero');
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
hero.appendChild(renderer.domElement);

// Create scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.z = 50;

// Grid parameters
const gridRows = 40; // increased from 16
const gridCols = 80; // increased from 32
const spacing = 1.2; // closer together
const points = [];
const geometry = new THREE.BufferGeometry();
const positions = [];
const basePositions = [];

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

const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, opacity: 0.5, transparent: true });
const pointCloud = new THREE.Points(geometry, material);
scene.add(pointCloud);

// Mouse interaction
let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  // Use rect.width/height for correct scaling, not hero.offsetWidth/offsetHeight
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
});

function animate() {
  const pos = geometry.attributes.position.array;
  for (let i = 0; i < points.length; i++) {
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
  }
  geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
