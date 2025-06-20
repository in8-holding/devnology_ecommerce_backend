import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ProductsController } from './adapters/in/controllers/products.controller';
import { OrdersController } from './adapters/in/controllers/orders.controller';

import { GetAllProductsUseCase } from './app/use-cases/get-all-products.use-case';
import { CreateOrderUseCase } from './app/use-cases/create-order.use-case';

import { BrazilianProvider } from './adapters/out/http/brazilian.provider';
import { EuropeanProvider } from './adapters/out/http/european.provider';
import { PrismaOrderRepository } from './adapters/out/database/repositories/prisma-order.repository';
import { PrismaService } from './adapters/out/database/prisma/prisma.service';
import { FindAllOrdersUseCase } from './app/use-cases/find-all-orders.use-case';

@Module({
  imports: [HttpModule],
  controllers: [ProductsController, OrdersController],
  providers: [
    PrismaService,
    {
      provide: 'BrazilianProvider',
      useClass: BrazilianProvider,
    },
    {
      provide: 'EuropeanProvider',
      useClass: EuropeanProvider,
    },
    {
      provide: 'OrderRepository',
      useClass: PrismaOrderRepository,
    },
    GetAllProductsUseCase,
    CreateOrderUseCase,
    FindAllOrdersUseCase,
  ],
})
export class AppModule {}