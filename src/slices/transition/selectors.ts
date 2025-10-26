import { RootState } from '@/store/store';

export const selectTransitionStartTargetRect = (state: RootState) =>
  state.transition.startTargetRect;
export const selectTransitionTargetPath = (state: RootState) =>
  state.transition.targetPath;
export const selectTransitionTargetId = (state: RootState) =>
  state.transition.targetId;
export const selectTransitionEndTargetRect = (state: RootState) =>
  state.transition.endTargetRect;
export const selectTransitionType = (state: RootState) => state.transition.type;
