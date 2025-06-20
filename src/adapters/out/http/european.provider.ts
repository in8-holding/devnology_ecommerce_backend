import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ProductProvider } from 'src/app/interfaces/out/product.provider';
import { Product } from 'src/domain/entities/product.entity';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EuropeanProvider implements ProductProvider {
  constructor(private readonly http: HttpService) {}

  async getProducts(): Promise<Product[]> {
    const { data } = await firstValueFrom(
      this.http.get('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider'),
    );

    return data.map((item: any) => new Product(
      item.id,
      item.name,
      item.description,
      parseFloat(item.price),
      item.image,
      'european',
    ));
  }
}
