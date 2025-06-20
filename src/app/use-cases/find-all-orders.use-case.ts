import { Injectable, Inject } from '@nestjs/common';
import { Order } from 'src/domain/entities/order.entity';
import { OrderRepository } from '../interfaces/out/order.repository';

@Injectable()
export class FindAllOrdersUseCase {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: OrderRepository
  ) {}

  async execute(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }
}