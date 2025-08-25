import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingGeometry } from './FloatingGeometry';
import { LoadingFallback } from './LoadingFallback';

interface Scene3DProps {
  children?: React.ReactNode;
}

export const Scene3D = ({ children }: Scene3DProps) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Ambient lighting for overall illumination */}
          <ambientLight intensity={0.3} />
          
          {/* Key light for primary illumination */}
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={0.8} 
            color="#06b6d4" 
          />
          
          {/* Fill light for secondary illumination */}
          <directionalLight 
            position={[-3, 2, -5]} 
            intensity={0.4} 
            color="#8b5cf6" 
          />
          
          {/* Point light for accent */}
          <pointLight 
            position={[0, 10, 0]} 
            intensity={0.5} 
            color="#06b6d4" 
          />

          {/* Floating geometric elements */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <FloatingGeometry position={[-8, 3, -5]} />
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <FloatingGeometry position={[8, -2, -8]} scale={0.7} />
          </Float>
          
          <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <FloatingGeometry position={[0, -5, -10]} scale={0.5} />
          </Float>

          {children}

          {/* Interactive camera controls */}
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={Math.PI / 6}
            minAzimuthAngle={-Math.PI / 6}
            maxDistance={15}
            minDistance={8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};