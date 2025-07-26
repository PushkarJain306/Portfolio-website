import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Import icons
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import jsIcon from '../assets/icons/js.svg';
import reactIcon from '../assets/icons/react.svg';
import pythonIcon from '../assets/icons/python.svg';
import tensorflowIcon from '../assets/icons/tensorflow.svg';

const TechSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(300, 300);
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Icons configuration
    const icons = [
      { name: 'html', position: new THREE.Vector3(-2, 0, 0), texture: htmlIcon },
      { name: 'css', position: new THREE.Vector3(2, 0, 0), texture: cssIcon },
      { name: 'js', position: new THREE.Vector3(0, -2, 0), texture: jsIcon },
      { name: 'react', position: new THREE.Vector3(0, 2, 0), texture: reactIcon },
      { name: 'python', position: new THREE.Vector3(0, 0, -2), texture: pythonIcon },
      { name: 'tensorflow', position: new THREE.Vector3(0, 0, 2), texture: tensorflowIcon },
    ];

    const textureLoader = new THREE.TextureLoader();
    const spheres = icons.map(icon => {
      const texture = textureLoader.load(icon.texture);
      const material = new THREE.MeshPhongMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.9
      });
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(icon.position);
      scene.add(sphere);
      return sphere;
    });

    // Camera and controls
    camera.position.z = 5;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      spheres.forEach(sphere => {
        sphere.rotation.y += 0.005;
      });
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-64 md:h-96" />;
};

export default TechSphere;