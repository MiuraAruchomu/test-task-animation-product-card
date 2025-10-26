'use client';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setEndTargetValue } from '@/slices/transition/transitionSlice';
import { getProducts } from '@/slices/products/productsThunks';
import { selectProducts } from '@/slices/products/selectors';
import {
  selectTransitionType,
  selectTransitionTargetId,
} from '@/slices/transition/selectors';
import { addStylesToMovedCard, removeStylesToMovedCard } from '../helpers';
import { useEffect } from 'react';
import ProductCard from './Card';

export default function ProductList() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProducts);
  const transitionType = useAppSelector(selectTransitionType);
  const targetId = useAppSelector(selectTransitionTargetId);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      const scrollY = sessionStorage.getItem('scrollY');

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
        sessionStorage.removeItem('scrollY');
      }

      if (transitionType === 'from-product' && targetId) {
        const img = document.getElementById(`product-${targetId}`);
        const wrapper = document.getElementById(`product-wrapper-${targetId}`);
        const title = document.getElementById(`product-title-${targetId}`);
        const price = document.getElementById(`product-price-${targetId}`);
        if (!img || !wrapper || !title || !price) return;

        addStylesToMovedCard({ img, wrapper, title, price });

        const timer = setTimeout(() => {
          removeStylesToMovedCard({ img, wrapper, title, price });
        }, 2500);

        const rect = img.getBoundingClientRect();
        const { top, left, width, height } = rect;

        dispatch(
          setEndTargetValue({
            endTargetRect: {
              top,
              left,
              width,
              height,
            },
          }),
        );
      }
    });
  }, []);

  return (
    products && (
      <div className='flex flex-wrap items-start gap-6 sm:gap-[10%] lg:gap-[5%]'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    )
  );
}
