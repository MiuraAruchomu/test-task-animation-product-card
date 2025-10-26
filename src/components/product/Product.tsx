'use client';

import { useRef } from 'react';
import ProductImage from './Image';
import { useProductTransition } from '@/hooks/product/useProductTransition';
import { useProduct } from '@/hooks/product/useProduct';

export default function Product() {
  const { id, product } = useProduct();
  const imgRef = useRef<HTMLImageElement>(null);
  const { handleClick } = useProductTransition({ id, imgRef });

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
                product.description.materials.split('\n').map((line, index) => (
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
          ref={imgRef}
          path={`/img/${id}.webp`}
          id={'product-image'}
          styles={'opacity-0 animate-fade-delay-14 animate-fill-both'}
        />
      </div>
    </div>
  );
}
