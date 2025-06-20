import { Order } from 'src/domain/entities/order.entity';

export class OrderMapper {
  static toPrisma(order: Omit<Order, 'id' | 'createdAt'>) {
    return {
      name: order.name,
      email: order.email,
      products: JSON.stringify(order.products),
    };
  }

  static toDomain(raw: any): Order {
    return new Order(
      raw.id,
      raw.name,
      raw.email,
      JSON.parse(raw.products),
      new Date(raw.createdAt),
    );
  }
}