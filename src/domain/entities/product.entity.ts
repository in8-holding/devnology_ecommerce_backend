export class Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly image: string,
    public readonly provider: 'brazilian' | 'european',
  ) {}
}