'use client';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import {
  selectTransitionType,
  selectTransitionStartTargetRect,
  selectTransitionTargetPath,
  selectTransitionEndTargetRect,
} from '@/slices/transition/selectors';
import {
  clearStartTargetValue,
  clearEndTargetValue,
} from '@/slices/transition/transitionSlice';
import { useState, useRef, useEffect } from 'react';

export default function FloatingImage() {
  const dispatch = useAppDispatch();

  const [showOverlay, setShowOverlay] = useState(false);

  const transitionType = useAppSelector(selectTransitionType);
  const startTargetRect = useAppSelector(selectTransitionStartTargetRect);
  const targetPath = useAppSelector(selectTransitionTargetPath);
  const endTargetRect = useAppSelector(selectTransitionEndTargetRect);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!transitionType || !startTargetRect || !targetPath) return;

    const img = imgRef.current;
    if (!img) return;

    Object.assign(img.style, {
      position: 'fixed',
      top: `${startTargetRect.top}px`,
      left: `${startTargetRect.left}px`,
      width: `${startTargetRect.width}px`,
      height: `${startTargetRect.height}px`,
      transition: 'all 1.5s ease-in-out',
      zIndex: '999',
    });

    requestAnimationFrame(() => {
      if (transitionType === 'to-product' && endTargetRect) {
        setShowOverlay(true);

        Object.assign(img.style, {
          top: `${endTargetRect.top}px`,
          left: `${endTargetRect.left}px`,
          width: `${endTargetRect.width}px`,
          height: `${endTargetRect.height}px`,
        });
      }

      if (transitionType === 'from-product' && endTargetRect) {
        setShowOverlay(true);

        Object.assign(img.style, {
          top: `${endTargetRect.top}px`,
          left: `${endTargetRect.left}px`,
          width: `${endTargetRect.width}px`,
          height: `${endTargetRect.height}px`,
        });
      }
    });

    const timer = setTimeout(() => {
      setShowOverlay(false);
      dispatch(clearStartTargetValue());
      dispatch(clearEndTargetValue());
    }, 1500);

    return () => clearTimeout(timer);
  }, [transitionType, startTargetRect, targetPath, endTargetRect]);
  return (
    <>
      {showOverlay && (
        <div className='fixed inset-0 bg-neutral-900 z-[998] animate-fade-in-out will-change-auto' />
      )}
      {targetPath && (
        <img
          ref={imgRef}
          src={targetPath}
          alt='floating'
          className='will-change-auto'
        />
      )}
    </>
  );
}
