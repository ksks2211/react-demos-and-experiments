import { PaletteMode } from "@mui/material";
import { usePreferences } from "../../hooks/usePreferences";

const ModeSettingCompo = () => {
  const { mode: currentMode, toggleMode, changeMode } = usePreferences();

  return (
    <div>
      <h2>Current Mode : {currentMode}</h2>
      {Object.values(["light", "dark"] as Array<PaletteMode>).map((mode) => (
        <button key={mode} onClick={() => changeMode(mode)}>
          {mode}
        </button>
      ))}
      <button key={"toggle"} onClick={() => toggleMode()}>
        toggle
      </button>
    </div>
  );
};

export default ModeSettingCompo;
