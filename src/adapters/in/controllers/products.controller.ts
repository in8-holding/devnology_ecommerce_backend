import { Controller, Get } from '@nestjs/common';
import { GetAllProductsUseCase } from 'src/app/use-cases/get-all-products.use-case';

@Controller('products')
export class ProductsController {
  constructor(private readonly getAllProductsUseCase: GetAllProductsUseCase) {}

  @Get()
  async getAll() {
    const products = await this.getAllProductsUseCase.execute();
    return products;
  }
}