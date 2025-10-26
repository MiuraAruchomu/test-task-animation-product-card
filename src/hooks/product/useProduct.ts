import { useParams } from 'next/navigation';
import { useAppSelector } from '../useAppSelector';
import { selectProductInfo } from '@/slices/products/selectors';

export const useProduct = () => {
  const params = useParams();

  const id = params.id && !Array.isArray(params.id) ? params.id : undefined;
  const product =
    params.id &&
    !Array.isArray(params.id) &&
    useAppSelector(selectProductInfo({ id: params.id }));

  return { id, product };
};
