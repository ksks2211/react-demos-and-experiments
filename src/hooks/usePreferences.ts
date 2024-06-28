import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { PaletteMode } from "@mui/material";
import { setMode } from "../features/preferences/preferencesSlice";

export function usePreferences() {
  const dispatch = useDispatch();

  const mode = useSelector((state: RootState) => state.preferences.mode);
  const lang = useSelector((state: RootState) => state.preferences.lang);

  const changeMode = (mode: PaletteMode) => {
    dispatch(setMode(mode));
  };

  const toggleMode = () => {
    if (mode === "light") {
      changeMode("dark");
    } else {
      changeMode("light");
    }
  };

  return {
    mode,
    lang,
    toggleMode,
    changeMode,
  };
}
