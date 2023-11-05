import { OrbitControls } from "@react-three/drei";
import { MyCharacter } from "./My-character";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "jump",
      options: ["dance", "jump", "hiphop", "jog", "bd1", "bd2", "bd3"],
    },
  });
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <MyCharacter animation={animation} />
      </group>

      <ambientLight intensity={1} />
    </>
  );
};
