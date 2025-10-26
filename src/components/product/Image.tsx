import { RefObject } from 'react';

export interface IProductImageProps {
  ref: RefObject<HTMLImageElement | null>;
  path: string;
  id: string;
  styles?: string;
}

export default function ProductImage({
  ref,
  path,
  id,
  styles,
}: IProductImageProps) {
  return (
    <img ref={ref} src={path} alt='product-img' id={id} className={styles} />
  );
}
