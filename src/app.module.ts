import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

// Controller
import { ProductsController } from './adapters/in/controllers/products.controller';

// Use Case
import { GetAllProductsUseCase } from './app/use-cases/get-all-products.use-case';

// Providers externos (adapters/out)
import { BrazilianProvider } from './adapters/out/http/brazilian.provider';
import { EuropeanProvider } from './adapters/out/http/european.provider';

@Module({
  imports: [HttpModule],
  controllers: [ProductsController],
  providers: [
    { provide: 'BrazilianProvider', useClass: BrazilianProvider },
    { provide: 'EuropeanProvider', useClass: EuropeanProvider },
    GetAllProductsUseCase,
  ],
})
export class AppModule {}
