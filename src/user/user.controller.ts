/**
 * Created by Cooper on 2022/03/28.
 */
import { Body, Controller, Delete, Get, Param, Post } from 'koaland';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller({ prefix: '/users' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: any): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | undefined> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
