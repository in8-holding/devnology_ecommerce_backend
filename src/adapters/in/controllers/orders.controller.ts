import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderUseCase } from 'src/app/use-cases/create-order.use-case';
import { FindAllOrdersUseCase } from 'src/app/use-cases/find-all-orders.use-case';
import { Order } from 'src/domain/entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly createOrderUseCase: CreateOrderUseCase,
        private readonly findAllOrdersUseCase: FindAllOrdersUseCase
    ) {}

    @Post()
    async create(@Body() body: CreateOrderDto): Promise<Order> {
        return await this.createOrderUseCase.execute(body);
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return await this.findAllOrdersUseCase.execute();
    }
}
