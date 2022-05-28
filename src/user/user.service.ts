/**
 * Created by Cooper on 2022/03/29.
 */
import { User } from './user.entity';
import { getConnection } from 'typeorm';
import { Injectable } from 'koaland';

@Injectable()
export class UserService {
  constructor() {}

  // use `this.usersRepository` after connect
  get usersRepository() {
    return getConnection().getRepository(User);
  }

  async create(createUserDto: any): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
