import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entities/product.entity';
import { ProductProvider } from 'src/app/interfaces/out/product.provider';

@Injectable()
export class GetAllProductsUseCase {
  constructor(
    @Inject('BrazilianProvider')
    private readonly brazilianProvider: ProductProvider,
    @Inject('EuropeanProvider')
    private readonly europeanProvider: ProductProvider,
  ) {}

  async execute(): Promise<Product[]> {
    const [brProducts, euProducts] = await Promise.all([
      this.brazilianProvider.getProducts(),
      this.europeanProvider.getProducts(),
    ]);
    return [...brProducts, ...euProducts];
  }
}
