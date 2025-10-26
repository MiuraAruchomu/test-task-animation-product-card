'use client';

import { useFloatingImageTransition } from '@/hooks/product/useFloatingImageTransition';
import { useState, useRef, useEffect } from 'react';

export default function FloatingImage() {
  const imgRef = useRef<HTMLImageElement>(null);
  const { showOverlay, targetPath } = useFloatingImageTransition(imgRef);

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
