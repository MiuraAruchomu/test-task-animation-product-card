import { RefObject, useEffect, useState } from 'react';
import { useAppDispatch } from '../useAppDispatch';
import { useAppSelector } from '../useAppSelector';
import {
  selectTransitionEndTargetRect,
  selectTransitionStartTargetRect,
  selectTransitionTargetPath,
  selectTransitionType,
} from '@/slices/transition/selectors';
import {
  clearEndTargetValue,
  clearStartTargetValue,
} from '@/slices/transition/transitionSlice';

export const useFloatingImageTransition = (
  imgRef: RefObject<HTMLImageElement | null>,
) => {
  const dispatch = useAppDispatch();

  const [showOverlay, setShowOverlay] = useState(false);

  const transitionType = useAppSelector(selectTransitionType);
  const startTargetRect = useAppSelector(selectTransitionStartTargetRect);
  const targetPath = useAppSelector(selectTransitionTargetPath);
  const endTargetRect = useAppSelector(selectTransitionEndTargetRect);

  useEffect(() => {
    if (!transitionType || !startTargetRect || !targetPath || !imgRef.current)
      return;

    Object.assign(imgRef.current.style, {
      position: 'fixed',
      top: `${startTargetRect.top}px`,
      left: `${startTargetRect.left}px`,
      width: `${startTargetRect.width}px`,
      height: `${startTargetRect.height}px`,
      transition: 'all 1.5s ease-in-out',
      zIndex: '999',
    });

    requestAnimationFrame(() => {
      if (!endTargetRect || !imgRef.current) return;
      setShowOverlay(true);

      Object.assign(imgRef.current.style, {
        top: `${endTargetRect.top}px`,
        left: `${endTargetRect.left}px`,
        width: `${endTargetRect.width}px`,
        height: `${endTargetRect.height}px`,
      });
    });

    const timer = setTimeout(() => {
      setShowOverlay(false);
      dispatch(clearStartTargetValue());
      dispatch(clearEndTargetValue());
    }, 1500);

    return () => clearTimeout(timer);
  }, [transitionType, startTargetRect, targetPath, endTargetRect]);

  return { showOverlay, targetPath };
};
