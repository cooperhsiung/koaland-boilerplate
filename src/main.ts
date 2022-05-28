/**
 * Created by Cooper on 2022/03/28.
 */
import 'reflect-metadata';
import { GrpcFactory, HttpFactory, ThriftFactory } from 'koaland';
import { AppModule } from './app';
import { initMysql } from './__db/mysql';

const bodyParser = require('koa-bodyparser');

var UnpkgService = require('../__gen_code/UnpkgService');
var { GreeterService } = require('../__gen_code/helloworld_grpc_pb');

async function bootstrap() {
  await initMysql();

  const app = await HttpFactory.create(AppModule, { middlewares: [bodyParser()] });
  await app.listen(3000);
  console.log('[ http-server ] listening on 3000... ');

  const app2 = await ThriftFactory.create(AppModule, { service: UnpkgService });
  await app2.listen(3001);
  console.log('[thrift-server] listening on 3001...');

  const app3 = await GrpcFactory.create(AppModule, { service: GreeterService });
  await app3.listen('0.0.0.0:3002');
  console.log('[ grpc-server ] listening on 3002...');
}
bootstrap();
