export class Order {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly products: {
      id: string;
      name: string;
      price: number;
      image: string;
      quantity: number;
    }[],
    public readonly createdAt: Date,
  ) {}
} 