import { Order } from 'src/domain/entities/order.entity';

export interface OrderRepository {
  create(order: Omit<Order, 'id' | 'createdAt'>): Promise<Order>;
  findAll(): Promise<Order[]>;
}