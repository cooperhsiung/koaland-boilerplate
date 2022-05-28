/**
 * Created by Cooper on 2022/05/04.
 */
import { UserService } from '../src/user/user.service';
import { Container } from 'koaland';

// mock typeorm, need not connect mysql
jest.mock('typeorm', () => {
  const doNothing = () => {
    //Empty function that mocks typeorm annotations
  };

  return {
    getConnection: jest.fn().mockReturnValue({
      getRepository: jest.fn().mockReturnValue({
        create: jest.fn().mockReturnValue({
          id: '2',
          name: 'John',
        }),
        findOne: jest.fn().mockReturnValue({
          id: '1',
          name: 'Tom',
        }),
        find: jest.fn().mockReturnValue([
          {
            id: '1',
            name: 'Tom',
          },
          {
            id: '2',
            name: 'John',
          },
        ]),
        remove: jest.fn().mockReturnValue(void 0),
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
  it('find a user', async () => {
    var userService = Container.get(UserService);
    var result = await userService.findOne('test');

    expect(result).toEqual({
      id: '1',
      name: 'Tom',
    });
  });

  it('find all user', async () => {
    var userService = Container.get(UserService);
    var result = await userService.findAll();

    expect(result).toEqual([
      {
        id: '1',
        name: 'Tom',
      },
      {
        id: '2',
        name: 'John',
      },
    ]);
  });
});
