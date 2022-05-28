/**
 * Created by Cooper on 2022/03/28.
 */
import {
  Body,
  Context,
  Controller,
  Get,
  Headers,
  Inject,
  Method,
  Param,
  Post,
  Query,
  Request,
  Response,
} from 'koaland';
import { ProductService } from './product.service';
var messages = require('../../__gen_code/helloworld_pb');

@Controller()
export class ProductController {
  @Inject() private productService: ProductService;

  @Get('/products/:id')
  async getProduct(@Param('id') id: string) {
    console.log('id', id);
    const result = await this.productService.findOne(id);
    console.log('result', result);
    return result;
  }

  @Get('/test')
  hello(@Query('as') as: string) {
    console.log('========= arguments', arguments);
    console.log('========= 1', 1);
    console.log('========= as', as);
    return 'hello world';
  }

  // ctx.params.id
  @Get('/test/:id')
  hello2(
    @Query('as') as: string,
    @Query() qqqq: any,
    @Param('id') uid: string,
    @Context() ctx: any,
    @Request() req: any,
    @Response() res: any,
  ) {
    return 'hello world';
  }

  @Post('/test/:id')
  hello3(
    @Query('as') as: string,
    @Query() qqqq: any,
    @Param('id') uid: string,
    @Context() ctx: any,
    @Request() req: any,
    @Response() res: any,
    @Body() body: any,
    @Headers() headers: any,
    @Headers('user-agent') userAgent: any,
  ) {
    return 'hello world';
  }

  // route for thrift or grpc
  @Method()
  Publish(@Request() req: any) {
    return { code: 0, message: 'publish success' };
  }

  // route for thrift or grpc
  @Method()
  sayHello(@Context() ctx: any) {
    console.log('ctx.request: ', (ctx.request as any).getName());
    var reply = new messages.HelloReply();
    reply.setMessage('Hello ' + ctx.call.request.getName());
    return reply;
  }
}
