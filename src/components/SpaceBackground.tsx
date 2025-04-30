import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingStars() {
  const starsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0002;
      starsRef.current.rotation.y += 0.0001;
    }
  });

  return <Stars ref={starsRef} radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />;
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-70 dark:opacity-90">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
}