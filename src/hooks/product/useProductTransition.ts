import { RefObject, useEffect } from 'react';
import { useAppDispatch } from '../useAppDispatch';
import {
  setEndTargetValue,
  setStartTargetValue,
} from '@/slices/transition/transitionSlice';
import { useRouter } from 'next/navigation';

export const useProductTransition = ({
  id,
  imgRef,
}: {
  id: string | undefined;
  imgRef: RefObject<HTMLImageElement | null>;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    if (!imgRef.current) return;
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();

    dispatch(
      setStartTargetValue({
        type: 'from-product',
        startTargetRect: { top, left, width, height },
        targetPath: `/img/${id}.webp`,
        targetId: id,
      }),
    );

    router.back();
  };

  useEffect(() => {
    if (!imgRef.current) return;
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();

    dispatch(
      setEndTargetValue({
        endTargetRect: { top, left, width, height },
      }),
    );
  }, []);

  return { handleClick };
};
