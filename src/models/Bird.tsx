import {useEffect, useRef} from 'react';

// @ts-ignore
import birdScene from "../assets/3d/bird.glb";
import {useAnimations, useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef<any>(null);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001']?.play();
    }, [])

    useFrame(({ clock, camera}) => {
        if (birdRef.current) {
            // Update the Y position
            birdRef.current.position.y = Math.sin(clock.elapsedTime) * .2 + 2

            if (birdRef.current.position.x > camera.position.x + 10) {
                birdRef.current.rotation.y = Math.PI;
            } else if (birdRef.current.position.x < camera.position.x - 10) {
                birdRef.current.rotation.y = 0;
            }

            if (birdRef.current.rotation.y === 0) {
                birdRef.current.position.x += .01;
                birdRef.current.position.z -= .01;
            } else {
                birdRef.current.position.x -= .01;
                birdRef.current.position.z += .01;
            }
        }


    })

    return (
        <mesh
            position={[-5, 2, 1]}
            scale={[.003, .003, .003]}
            ref={birdRef}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Bird;
