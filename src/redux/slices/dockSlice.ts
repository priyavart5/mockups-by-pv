import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreviewState {
  isPreview: boolean;
}

interface HideMockupState {
  isMockupHide: boolean;
}

interface HideBackgroundState {
  isBackgroundHide: boolean;
}

interface DockState {
  preview: PreviewState;
  hideMockup: HideMockupState;
  hideBackground: HideBackgroundState;
}

const initialState: DockState = {
  preview: { isPreview: false },
  hideMockup: { isMockupHide: false },
  hideBackground: { isBackgroundHide: false },
};


const previewSlice = createSlice({
  name: 'dock',
  initialState,
  reducers: {
    setPreview: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.preview.isPreview = action.payload;
    },
    setHideMockup: (state, action: PayloadAction<boolean>) => {
      console.log('hide mockup' , action.payload)
      state.hideMockup.isMockupHide = action.payload;
    },
    setHideBackground: (state, action: PayloadAction<boolean>) => {
      console.log('hide bg' , action.payload)
      state.hideBackground.isBackgroundHide = action.payload;
    },
  },
});

export const { setPreview, setHideMockup, setHideBackground } = previewSlice.actions;
export default previewSlice.reducer;