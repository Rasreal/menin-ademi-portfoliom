import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import {NokiaModel} from "./NokiaModel.jsx";

const ConsoleModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <NokiaModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-0.5,0,2]} zoom={0.6} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default ConsoleModelContainer;
