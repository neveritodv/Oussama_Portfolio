'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface Cinematic3DLoaderProps {
  onComplete: () => void;
}

// Assets to preload realistically
const ASSETS_TO_PRELOAD = [
  '/assets/oussama_logo.png',
  '/assets/oussama_portrait.jpg',
  '/assets/hero_3d_avatar.jpg',
  '/assets/meal_racine_1.jpg',
  '/assets/meal_racine_2.jpg',
  '/assets/meal_racine_3.jpg',
  '/assets/dreams_rent_1.jpg',
  '/assets/dreams_rent_2.jpg',
  '/assets/dreams_rent_3.jpg',
  '/assets/atlas_ethereal_1.jpg',
  '/assets/atlas_ethereal_2.jpg',
  '/assets/atlas_ethereal_3.jpg',
  '/assets/marco_kesh_1.jpg',
  '/assets/marco_kesh_2.jpg',
  '/assets/marco_kesh_3.jpg',
  '/assets/eduflux_1.jpg',
  '/assets/eduflux_2.jpg',
  '/assets/eduflux_3.jpg',
  '/assets/massari_1.jpg',
  '/assets/massari_2.jpg',
  '/assets/massari_3.jpg',
];

const LOADING_PHASES = [
  'INITIALIZING SYSTEM...',
  'CHECKING MEMORY & SHADERS...',
  'LOADING HERO ASSETS...',
  'PRELOADING PROJECT GALLERY...',
  'LOADING CV & EXPERIENCE DATA...',
  'CONNECTING NEURAL CORE...',
  'SYNCHRONIZING INTERFACE...',
  'PREPARING PORTFOLIO WORLD...',
  'LAUNCHING EXPERIENCE...',
];

export const Cinematic3DLoader: React.FC<Cinematic3DLoaderProps> = ({ onComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [isWarping, setIsWarping] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Web Audio Synth for Sci-Fi Sounds
  const playSoundEffect = (type: 'boot' | 'snap' | 'charge' | 'warp') => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'boot') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.4);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      } else if (type === 'snap') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'charge') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.8);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.15, now + 0.7);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
        osc.start(now);
        osc.stop(now + 0.9);
      } else if (type === 'warp') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.6);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc.start(now);
        osc.stop(now + 0.7);
      }
    } catch {
      // Audio playback fails silently if user has not interacted with DOM yet
    }
  };

  // Real Preloading Sequence
  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = ASSETS_TO_PRELOAD.length;

    playSoundEffect('boot');

    // Terminal log additions
    const logs = [
      'SYSTEM_INIT_V2.6 // BOOT SEQUENCE OK',
      'CHECKING MEMORY & THREE.JS SHADERS...',
      'ALLOCATING GPU BUFFER & TEXTURES...',
      'VERIFYING PROJECT DATABASE...',
      'NEURAL CORE CONNECTED.',
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setBootLogs((prev) => [...prev, log]);
      }, index * 400);
    });

    const checkProgress = () => {
      loadedCount++;
      const currentPct = Math.min(100, Math.round((loadedCount / totalAssets) * 100));
      setProgress(currentPct);

      const phaseIdx = Math.min(
        LOADING_PHASES.length - 1,
        Math.floor((currentPct / 100) * LOADING_PHASES.length)
      );
      setCurrentPhaseIndex(phaseIdx);

      if (loadedCount >= totalAssets) {
        // Trigger completion sequence
        setTimeout(() => {
          setProgress(100);
          setCurrentPhaseIndex(LOADING_PHASES.length - 1);
          playSoundEffect('charge');

          // Stage 5 & 6 Warp Build Up
          setTimeout(() => {
            setIsWarping(true);
            playSoundEffect('warp');

            setTimeout(() => {
              setIsDone(true);
              onComplete();
            }, 750);
          }, 600);
        }, 300);
      }
    };

    // Preload image assets
    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.onload = checkProgress;
      img.onerror = checkProgress;
      img.src = src;
    });

    // Fallback timer safety to guarantee completion within 6 seconds max
    const fallbackTimer = setTimeout(() => {
      if (loadedCount < totalAssets) {
        setProgress(100);
        setIsWarping(true);
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 750);
      }
    }, 6000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  // Three.js WebGL Scene Setup
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0c0c12, 0.035);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00e5ff, 4, 30);
    cyanPointLight.position.set(5, 5, 5);
    scene.add(cyanPointLight);

    const bluePointLight = new THREE.PointLight(0x4364f7, 3, 30);
    bluePointLight.position.set(-5, -5, 5);
    scene.add(bluePointLight);

    // 3. User Logo Hologram Plane
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/assets/oussama_logo.png');
    logoTexture.minFilter = THREE.LinearFilter;

    const logoGeo = new THREE.PlaneGeometry(3.5, 3.5);
    const logoMat = new THREE.MeshStandardMaterial({
      map: logoTexture,
      transparent: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: new THREE.Color(0x00e5ff),
      emissiveIntensity: 0.25,
      side: THREE.DoubleSide,
    });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.set(0, 0.3, 0);
    scene.add(logoMesh);

    // Reflection floor grid
    const gridHelper = new THREE.GridHelper(40, 40, 0x00e5ff, 0x1f2438);
    gridHelper.position.y = -3.5;
    gridHelper.material.opacity = 0.35;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // 4. Concentric Wireframe HUD Rings
    const ringGeo1 = new THREE.RingGeometry(2.4, 2.45, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.position.copy(logoMesh.position);
    scene.add(ringMesh1);

    const ringGeo2 = new THREE.RingGeometry(3.0, 3.03, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x4364f7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.position.copy(logoMesh.position);
    scene.add(ringMesh2);

    // 5. 3D Magnetic Shards (Fly from space)
    const shardCount = 18;
    const shardsGroup = new THREE.Group();
    const shardGeos = [
      new THREE.BoxGeometry(0.4, 0.4, 0.08),
      new THREE.TetrahedronGeometry(0.3),
      new THREE.OctahedronGeometry(0.35),
    ];
    const shardMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
      wireframe: false,
    });

    const shardInitialPositions: THREE.Vector3[] = [];
    const shardTargetPositions: THREE.Vector3[] = [];

    for (let i = 0; i < shardCount; i++) {
      const geo = shardGeos[i % shardGeos.length];
      const mesh = new THREE.Mesh(geo, shardMat);

      // Random starting orbital position far away
      const initialPos = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15
      );
      mesh.position.copy(initialPos);

      // Target position around logo ring
      const angle = (i / shardCount) * Math.PI * 2;
      const radius = 2.6;
      const targetPos = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius + 0.3,
        (Math.random() - 0.5) * 0.5
      );

      shardInitialPositions.push(initialPos);
      shardTargetPositions.push(targetPos);
      shardsGroup.add(mesh);
    }
    scene.add(shardsGroup);

    // 6. Particle Core Cloud (500+ particles)
    const particleCount = window.innerWidth < 768 ? 200 : 500;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.12,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow rotation of logo & rings
      logoMesh.rotation.y = Math.sin(elapsedTime * 0.8) * 0.15;
      logoMesh.rotation.x = Math.cos(elapsedTime * 0.6) * 0.08;

      ringMesh1.rotation.z = elapsedTime * 0.5;
      ringMesh2.rotation.z = -elapsedTime * 0.3;

      // Particle system drift
      particleSystem.rotation.y = elapsedTime * 0.05;

      // Magnetic shard assembly lerp based on progress
      const factor = Math.min(1, progress / 100);
      shardsGroup.children.forEach((shard, idx) => {
        const initPos = shardInitialPositions[idx];
        const targetPos = shardTargetPositions[idx];

        // Smooth cubic lerp into place
        shard.position.x += (targetPos.x * factor + initPos.x * (1 - factor) - shard.position.x) * 0.08;
        shard.position.y += (targetPos.y * factor + initPos.y * (1 - factor) - shard.position.y) * 0.08;
        shard.position.z += (targetPos.z * factor + initPos.z * (1 - factor) - shard.position.z) * 0.08;

        shard.rotation.x += 0.02;
        shard.rotation.y += 0.03;
      });

      // Smooth camera parallax
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.05;

      // Warp Zoom Acceleration at 100%
      if (isWarping) {
        camera.position.z -= 0.45;
        logoMat.emissiveIntensity += 0.2;
        particleMat.size += 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isWarping]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[10000] bg-[#0C0C12] text-[#D7E2EA] font-sans overflow-hidden select-none flex flex-col justify-between p-6 sm:p-10"
      >
        {/* Three.js Canvas Container */}
        <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />

        {/* TOP HUD HEADER */}
        <div className="relative z-10 flex items-center justify-between font-mono text-xs tracking-widest text-[#00E5FF]/80 uppercase">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            <span>OUSSAMA_DEV // OS V2.6</span>
          </div>
          <div className="hidden sm:block text-[#D7E2EA]/50">
            SYSTEM_STATUS: <span className="text-[#00E5FF]">ONLINE</span>
          </div>
        </div>

        {/* CENTER STAGE OVERLAY HUD */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto pointer-events-none">
          {/* Terminal Boot Log Output */}
          <div className="mb-8 font-mono text-[10px] sm:text-xs text-[#00E5FF]/70 space-y-1 max-w-md h-16 overflow-hidden flex flex-col justify-end">
            {bootLogs.slice(-3).map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="truncate"
              >
                &gt; {log}
              </motion.div>
            ))}
          </div>

          {/* CIRCULAR PROGRESS HUD */}
          <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="rgba(0, 229, 255, 0.1)"
                strokeWidth="2"
                fill="none"
              />
              {/* Animated Progress Ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#gradient)"
                strokeWidth="3.5"
                fill="none"
                strokeDasharray="264"
                strokeDashoffset={264 - (264 * progress) / 100}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#4364F7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Numeric Percentage Counter */}
            <div className="absolute flex flex-col items-center justify-center font-mono">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]">
                {progress}%
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#00E5FF]/80 mt-1">
                LOADING
              </span>
            </div>
          </div>

          {/* DYNAMIC MORPHING PHASE TEXT */}
          <motion.div
            key={currentPhaseIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA] font-semibold bg-[#14151B]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#00E5FF]/30 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
          >
            {LOADING_PHASES[currentPhaseIndex]}
          </motion.div>
        </div>

        {/* BOTTOM PROGRESS BAR & BRAND FOOTER */}
        <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center space-y-3 font-mono text-[10px] text-[#D7E2EA]/50">
          <div className="w-full h-1 rounded-full bg-[#181920] overflow-hidden border border-[#2B2D38]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00E5FF] to-[#4364F7] shadow-[0_0_12px_#00E5FF]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>
          <div className="flex justify-between w-full uppercase tracking-wider text-[#D7E2EA]/60">
            <span>PORTFOLIO SYSTEM ENGINE</span>
            <span>OUSSAMA MOUJANE</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cinematic3DLoader;
