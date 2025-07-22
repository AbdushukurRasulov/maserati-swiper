import { useState } from "react";
import Slider from "./components/Slider";

function App() {
  const [switcher, setSwitcher] = useState("exterior");
  const [activeSlider, setActiveSlider] = useState<string | null>(null);

  const isActiveSlider = (name: string) => name === switcher;

  const hasAnimated = (name: string) => {
    return activeSlider === name ? "animate-switch-slider" : "";
  };

  const handleSwitch = (target: string) => {
    if (target === switcher) return;

    setSwitcher(target);
    setActiveSlider(switcher);

    setTimeout(() => {
      setActiveSlider(null);
    }, 1350);
  };

  return (
    <div className="relative h-lvh w-full">
      <Slider
        name="exterior"
        className={`${isActiveSlider("exterior") ? "is-active" : ""} ${
          hasAnimated("exterior") ? "animate-switch-slider" : ""
        }`}
      />
      <Slider
        name="interior"
        className={`${isActiveSlider("interior") ? "is-active" : ""}  ${
          hasAnimated("interior") ? "animate-switch-slider" : ""
        }`}
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white flex items-center gap-4 rounded z-30 p-4">
        <button type="button" onClick={() => handleSwitch("exterior")} className="uppercase cursor-pointer">
          <span className={`${switcher === "exterior" && "border-b"}`}>Exterior</span>
        </button>
        <button type="button" onClick={() => handleSwitch("interior")} className="uppercase cursor-pointer">
          <span className={`${switcher === "interior" && "border-b"}`}>Interior</span>
        </button>
      </div>
    </div>
  );
}

export default App;
