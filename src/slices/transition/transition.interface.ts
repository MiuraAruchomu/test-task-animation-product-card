import { TtransitionType } from './transition.type';

export interface IDOMRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ITransitionState {
  type: TtransitionType | null;
  startTargetRect: IDOMRect | null;
  targetPath: string | null;
  targetId: string | null;
  endTargetRect: IDOMRect | null;
}

export interface ITransitionStartTargetValuePayload {
  type: TtransitionType;
  startTargetRect: IDOMRect;
  targetPath: string;
  targetId?: string;
}

export interface ITransitionEndTargetValuePayload {
  endTargetRect: IDOMRect;
}
