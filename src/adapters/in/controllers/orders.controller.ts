import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderUseCase } from 'src/app/use-cases/create-order.use-case';
import { FindAllOrdersUseCase } from 'src/app/use-cases/find-all-orders.use-case';
import { Order } from 'src/domain/entities/order.entity';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly createOrderUseCase: CreateOrderUseCase,
        private readonly findAllOrdersUseCase: FindAllOrdersUseCase
    ) {}

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

    @Get()
    async findAll(): Promise<Order[]> {
        return await this.findAllOrdersUseCase.execute();
    }
}
