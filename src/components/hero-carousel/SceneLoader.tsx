import { Html, useProgress } from "@react-three/drei";

export default function SceneLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-[#214d3b] border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-sm text-gray-700">Loading {Math.round(progress)}%</p>
      </div>
    </Html>
  );
}
