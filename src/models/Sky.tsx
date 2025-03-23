import {useRef} from 'react';
import {useGLTF} from "@react-three/drei";

// @ts-ignore
import skyScene from "../assets/3d/sky.glb";
import {useFrame} from "@react-three/fiber";

const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef<any>();

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += .50 * delta;
        }
    });
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    );
};

export default Sky;
