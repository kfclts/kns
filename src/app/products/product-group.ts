import { Product } from './product';

export interface ProductGroup {
  [key: string]: Product[];
}
