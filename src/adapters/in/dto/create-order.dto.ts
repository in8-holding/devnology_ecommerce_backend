export class CreateOrderDto {
  name: string;
  email: string;
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}