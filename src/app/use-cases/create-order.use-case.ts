import { Injectable, Inject } from '@nestjs/common';
import { OrderRepository } from '../interfaces/out/order.repository';
import { Order } from 'src/domain/entities/order.entity';
import { randomUUID } from 'crypto';
import { CreateOrderDto } from 'src/adapters/in/dto/create-order.dto';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: OrderRepository
  ) {}

  async execute(input: CreateOrderDto): Promise<Order> {
    const newOrder = new Order(
      randomUUID(),
      input.name,
      input.email,
      input.products,
      new Date()
    );

    return this.orderRepository.create({
      name: newOrder.name,
      email: newOrder.email,
      products: newOrder.products,
    });
  }
}