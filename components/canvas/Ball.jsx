import React, { useRef } from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >

      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh
        castShadow
        receiveShadow
        scale={3}
      >

        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color='#FFFFFF'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.75}
          map={decal}
          transparent={true}
          depthTest={false}
          depthWrite={true}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export default Ball;