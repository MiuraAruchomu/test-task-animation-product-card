export interface IDescription {
  subtitle: string;
  materials: string;
}

export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: IDescription;
}

export interface IProductsState {
  products: IProduct[] | null;
}
