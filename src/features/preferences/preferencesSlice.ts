import { PaletteMode } from "@mui/material";
import { Lang } from "../../types/preferences.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferenceState {
  mode: PaletteMode;
  lang: Lang;
}

const initialState: PreferenceState = {
  mode: "light",
  lang: Lang.English,
};

const preferenceSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<PaletteMode>) => {
      state.mode = action.payload;
    },
    setLang: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload;
    },
  },
});

export const { setMode, setLang } = preferenceSlice.actions;
export default preferenceSlice.reducer;
