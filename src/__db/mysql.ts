/**
 * Created by Cooper on 2022/03/29.
 */
import { User } from '../user/user.entity';
import { createConnection } from 'typeorm';
import { Product } from '../product/product.entity';

const dsnOptions = {
  host: '127.0.0.1',
  port: 3306,
  database: 'db_test',
  username: 'db_user',
  password: 'db_pass',
};

const options: any = {
  ...dsnOptions,
  name: 'default',
  type: 'mysql',
  logging: ['query', 'error', 'schema'],
  synchronize: false,
  entities: [User, Product],
};

export async function initMysql() {
  try {
    await createConnection(options);
    console.log(options, 'mysql connected ..');
  } catch (e) {
    console.warn(e.message, ',', 'mysql connect failed, you may not use the db query function');
  }
}
