import {MeshDistortMaterial, Sphere} from "@react-three/drei";

const Shape = () => {
    return (
        <>
            <Sphere args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                    color="#b363d4"
                    attach="material"
                    distort={0.5}
                    speed={2.5}
                />
            </Sphere>
            <ambientLight intensity={2}/>
            <directionalLight position={[1, 2, 3, 4, 5]}/>
        </>
    );
};

export default Shape;
