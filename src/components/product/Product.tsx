'use client';

import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import {
  setStartTargetValue,
  setEndTargetValue,
} from '@/slices/transition/transitionSlice';
import { selectProductInfo } from '@/slices/products/selectors';
import { isValueStringOrUndefined } from './helpers';
import { useEffect } from 'react';
import ProductImage from './Image';

export default function Product() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const router = useRouter();

  const product =
    params.id &&
    !Array.isArray(params.id) &&
    useAppSelector(selectProductInfo({ id: params.id }));

  const handleClick = () => {
    const img = document.getElementById('product-image');
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const { top, left, width, height } = rect;

    dispatch(
      setStartTargetValue({
        type: 'from-product',
        startTargetRect: { top, left, width, height },
        targetPath: `/img/${params.id}.webp`,
        targetId: isValueStringOrUndefined(params.id) ? params.id : undefined,
      }),
    );

    router.back();
  };

  useEffect(() => {
    const img = document.getElementById('product-image');
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const { top, left, width, height } = rect;

    dispatch(
      setEndTargetValue({
        endTargetRect: { top, left, width, height },
      }),
    );
  }, []);

  return (
    <div className='mx-auto 2xl:mx-0 flex flex-col items-start w-[90%] 2xl:w-full'>
      <button
        className='relative my-2.5 px-6 py-2 text-white text-lg uppercase bg-neutral-800  backdrop-blur-2xl hover:bg-neutral-950 transition-colors duration-600 cursor-pointer opacity-0 animate-fade-up-2s animate-fill-both will-change-auto'
        onClick={handleClick}
      >
        назад
      </button>
      <div className='flex flex-col-reverse lg:flex-row justify-between w-full gap-3 lg:gap-0'>
        <div className='flex flex-col justify-between lg:w-1/2 xl:w-[60%]'>
          <div className='flex flex-col'>
            <h1 className='text-neutral-900 text-5xl lg:text-4xl opacity-0 animate-fade-up-2s-delay-03 animate-fill-both will-change-auto'>
              {product && product.title}
            </h1>
            <p className='text-neutral-600 text-2xl mt-6 opacity-0 animate-fade-up-2s-delay-06 animate-fill-both will-change-auto'>
              {product && product.description.subtitle}
            </p>
            <p className='text-neutral-900 text-xl mt-12 opacity-0 animate-fade-up-2s-delay-09 animate-fill-both will-change-auto'>
              Материалы:
              <br />
              {product &&
                product.description.materials.split('/n').map((line, index) => (
                  <span key={index}>
                    - {line} <br />
                  </span>
                ))}
            </p>
          </div>
          <div className='flex flex-col gap-2 mt-12 lg:mt-0'>
            <span className='text-neutral-900 text-4xl opacity-0 animate-fade-up-2s-delay-12 animate-fill-both will-change-auto'>
              {product && product.price}₽
            </span>
            <button className='w-full md:w-96 bg-neutral-800 text-white text-2xl py-5 hover:bg-neutral-950 transition-colors duration-600 cursor-pointer opacity-0 animate-fade-up-2s-delay-15 animate-fill-both will-change-auto'>
              В корзину
            </button>
          </div>
        </div>
        <ProductImage
          path={`/img/${params.id}.webp`}
          id={'product-image'}
          styles={'opacity-0 animate-fade-delay-14 animate-fill-both'}
        />
      </div>
    </div>
  );
}
