/**
 * Created by Cooper on 2022/05/04.
 */
import { ProductService } from '../src/product/product.service';
import { Container } from 'koaland';
import { getConnection } from 'typeorm';
import { Product } from '../src/product/product.entity';

// mock typeorm, need not connect mysql
jest.mock('typeorm', () => {
  const doNothing = () => {
    //Empty function that mocks typeorm annotations
  };

  return {
    getConnection: jest.fn().mockReturnValue({
      getRepository: jest.fn().mockReturnValue({
        findOne: jest.fn().mockReturnValue({
          id: '123',
          name: 'productA',
        }),
      }),
    }),
    // do nothing
    PrimaryGeneratedColumn: doNothing,
    Column: doNothing,
    Entity: doNothing,
    Equal: doNothing,
    Not: doNothing,
    Like: doNothing,
  };
});

describe('findOne should return single product found by id. ', () => {
  it('findOne', async () => {
    var productService = Container.get(ProductService);
    var result = await productService.findOne('test');

    expect(result).toEqual({
      id: '123',
      name: 'productA',
    });
    expect(getConnection().getRepository(Product).findOne).toHaveBeenCalledTimes(1);
  });
});
