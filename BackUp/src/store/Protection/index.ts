import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const ProtectionSlice = createSlice({
  name: "Protection",
  initialState,
  reducers: {
    setWithoutProtection: (state: any, action: PayloadAction<boolean>) => {
      state.withoutProtection = action.payload;
    },
  },
});

export const {setWithoutProtection } = ProtectionSlice.actions;
export default ProtectionSlice.reducer;