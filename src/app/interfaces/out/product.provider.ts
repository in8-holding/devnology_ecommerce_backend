import { Product } from 'src/domain/entities/product.entity';

export interface ProductProvider {
  getProducts(): Promise<Product[]>;
}