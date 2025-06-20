import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/app/interfaces/out/order.repository';
import { Order } from 'src/domain/entities/order.entity';
import { PrismaService } from '../prisma/prisma.service';
import { OrderMapper } from '../mappers/order.mapper';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
    const created = await this.prisma.order.create({
      data: OrderMapper.toPrisma(order),
    });
    return OrderMapper.toDomain(created);
  }

  async findAll(): Promise<Order[]> {
    const rows = await this.prisma.order.findMany();
    return rows.map(OrderMapper.toDomain);
  }
}
