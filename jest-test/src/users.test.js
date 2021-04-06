// const userService = require('./userService');
// const data = require('./data');
import { findAll, create, destroy, update } from './UserService';
import { users } from './data';

// test('find all users', () => {
//   data.users.push(
//     { id: 1, email: 'user1@test.com' },
//     { id: 2, email: 'user2@test.com' },
//     { id: 3, email: 'user3@test.com' }
//   );

//   const users = userService.findAll();

//   expect(users).toHaveLength(3);
//   expect(users).toContainEqual({ id: 1, email: 'user1@test.com' });
//   expect(users).toContainEqual({ id: 2, email: 'user2@test.com' });
//   expect(users).toContainEqual({ id: 3, email: 'user3@test.com' });
// });

beforeEach(() => {
  users.push(
    { id: 1, email: 'user1@test.com' },
    { id: 2, email: 'user2@test.com' },
    { id: 3, email: 'user3@test.com' }
  );
});

afterEach(() => {
  users.splice(0);
});

describe('group 1', () => {
  test('find all users', () => {
    const userDatas = findAll();

    expect(userDatas).toHaveLength(3);
    expect(userDatas).toContainEqual({ id: 1, email: 'user1@test.com' });
    expect(userDatas).toContainEqual({ id: 2, email: 'user2@test.com' });
    expect(userDatas).toContainEqual({ id: 3, email: 'user3@test.com' });
  });

  test('create a user', () => {
    const user = { id: 4, email: 'user4@test.com' };

    create(user);

    expect(users).toHaveLength(4);
    expect(users).toContainEqual(user);
  });

  it('destroy a user', () => {
    const id = 3;
    const user = users.find(user => user.id === id);

    destroy(id);

    expect(users).toHaveLength(2);
    expect(users).not.toContainEqual(user);
  });
});
