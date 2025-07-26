import {
  ITransitionState,
  ITransitionStartTargetValuePayload,
  ITransitionEndTargetValuePayload,
} from './transition.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ITransitionState = {
  type: null,
  startTargetRect: null,
  targetPath: null,
  targetId: null,
  endTargetRect: null,
};

export const transitionSlice = createSlice({
  name: 'transition-slice',
  initialState,
  reducers: {
    setStartTargetValue: (
      state,
      action: PayloadAction<ITransitionStartTargetValuePayload>,
    ) => {
      state.type = action.payload.type;
      state.startTargetRect = action.payload.startTargetRect;
      state.targetPath = action.payload.targetPath;
      state.targetId = action.payload.targetId ? action.payload.targetId : null;
    },
    clearStartTargetValue: (state) => {
      state.type = null;
      state.startTargetRect = null;
      state.targetPath = null;
      state.targetId = null;
    },
    setEndTargetValue: (
      state,
      action: PayloadAction<ITransitionEndTargetValuePayload>,
    ) => {
      state.endTargetRect = action.payload.endTargetRect;
    },
    clearEndTargetValue: (state) => {
      state.endTargetRect = null;
    },
  },
});

export const {
  setStartTargetValue,
  clearStartTargetValue,
  setEndTargetValue,
  clearEndTargetValue,
} = transitionSlice.actions;
export default transitionSlice.reducer;
