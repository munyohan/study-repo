// const data = require('./data');

// module.exports = {
//   findAll() {
//     return data.users;
//   },

//   create(user) {
//     data.users.push(user);
//   },

//   destroy(id) {
//     data.users.splice(
//       data.users.findIndex(user => user.id === id),
//       1
//     );
//   },

//   update(id, user) {
//     data.users[data.users.findIndex(user => user.id === id)] = user;
//   },
// };
import { users } from './data';

export function findAll() {
  return users;
}

export function create(user) {
  users.push(user);
}

export function destroy(id) {
  users.splice(
    users.findIndex(user => user.id === id),
    1
  );
}

export function update(id, user) {
  users[users.findIndex(user => user.id === id)] = user;
}
