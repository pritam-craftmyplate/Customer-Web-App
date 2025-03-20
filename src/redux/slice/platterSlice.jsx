

import { createSlice } from "@reduxjs/toolkit";
import { getPlattersByGroupIdAsync } from "../service/platterService";

const initialState = {
  platters: null,
  loading: false,
  error: null,
};

const platterSlice = createSlice({
  name: "platter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlattersByGroupIdAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("⏳ Fetching platters...");
      })
      .addCase(getPlattersByGroupIdAsync.fulfilled, (state, action) => {
        console.log("Redux Action Payload:", action.payload);
        state.platters = action.payload?.body ;
        state.loading = false
        
      })
      .addCase(getPlattersByGroupIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch platters";
        console.error("❌ API Fetch Failed:", state.error);
      });
  },
});

export default platterSlice.reducer;

