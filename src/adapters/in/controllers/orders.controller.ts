import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderUseCase } from 'src/app/use-cases/create-order.use-case';
import { Order } from 'src/domain/entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) {}

  @Post()
  async create(@Body() body: {
    name: string;
    email: string;
    products: {
      id: string;
      name: string;
      price: number;
      image: string;
      quantity: number;
    }[];
  }): Promise<Order> {
    return await this.createOrderUseCase.execute(body);
  }
}
