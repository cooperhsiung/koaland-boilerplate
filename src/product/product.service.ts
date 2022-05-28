/**
 * Created by Cooper on 2022/03/30.
 */
import { getConnection } from 'typeorm';
import { Product } from './product.entity';
import { Injectable } from 'koaland';

@Injectable()
export class ProductService {
  constructor() {}

  // use `this.productRepository` after connect
  get productRepository() {
    return getConnection().getRepository(Product);
  }

  async findOne(id: string) {
    return this.productRepository.findOne(id);
  }
}
