import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setStartTargetValue } from '@/slices/transition/transitionSlice';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductImage from '../Image';

export interface IProductCardProps {
  id: string;
  title: string;
  price: number;
}

export default function ProductCard({ id, title, price }: IProductCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const { top, left, width, height } = rect;

    dispatch(
      setStartTargetValue({
        type: 'to-product',
        startTargetRect: { top, left, width, height },
        targetPath: `/img/${id}.webp`,
        targetId: id,
      }),
    );

    sessionStorage.setItem('scrollY', window.scrollY.toString());
    router.push(`/products/${id}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -50% 0px',
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`mx-auto sm:mx-0 w-[90%] sm:w-[45%] lg:w-[30%] sm:mb-12 md:mb-16 cursor-pointer opacity-0 ${isVisible ? 'animate-fade-up-1s' : ''} animate-fill-both will-change-auto`}
      onClick={handleClick}
    >
      <div
        id={`product-wrapper-${id}`}
        className='flex justify-center w-full bg-[#efefef]'
      >
        <ProductImage path={`/img/${id}.webp`} id={`product-${id}`} />
      </div>
      <h1
        id={`product-title-${id}`}
        className='mt-2 text-neutral-900 text-2xl xl:text-3xl'
      >
        {title}
      </h1>
      <span
        id={`product-price-${id}`}
        className='text-neutral-500 text-lg xl:text-xl'
      >
        {price}₽
      </span>
    </div>
  );
}
