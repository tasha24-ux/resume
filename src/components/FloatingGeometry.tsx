import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position?: [number, number, number];
  scale?: number;
}

export const FloatingGeometry = ({ position = [0, 0, 0], scale = 1 }: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#06b6d4" 
        transparent 
        opacity={0.7}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};