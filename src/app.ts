/**
 * Created by Cooper on 2022/03/28.
 */
import { Module } from 'koaland';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';

const costMiddleware = async (ctx: any, next: any) => {
  // console.log('middle1')
  const start = Date.now();
  await next();
  console.log(`process ${ctx.path} request from ${ctx.ip} cost ${Date.now() - start}ms`);
};

const testMiddleware = async (ctx: any, next: any) => {
  // console.log('middle2')
  const start = Date.now();
  await next();
  console.log(`process ${ctx.path} request from ${ctx.ip} cost ${Date.now() - start}ms`);
};

@Module({
  controllers: [UserController, ProductController],
  midddlewares: [costMiddleware, testMiddleware],
})
export class AppModule {}
