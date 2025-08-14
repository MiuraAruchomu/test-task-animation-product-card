export interface IProductImageProps {
  path: string;
  id: string;
  styles?: string;
}

export default function ProductImage({ path, id, styles }: IProductImageProps) {
  return <img src={path} alt='product-img' id={id} className={styles} />;
}
