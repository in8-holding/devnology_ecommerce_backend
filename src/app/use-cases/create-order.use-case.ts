import { Injectable, Inject } from '@nestjs/common';
import { OrderRepository } from '../interfaces/out/order.repository';
import { Order } from 'src/domain/entities/order.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: OrderRepository
  ) {}

  async execute(input: {
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