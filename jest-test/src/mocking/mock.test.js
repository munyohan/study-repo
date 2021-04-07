const axios = require('axios');
const userService = require('./userService');

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';
const findOne = id =>
  axios.get(`${API_ENDPOINT}/users/${id}`).then(response => response.data);

jest.mock('axios');

test('findOne fetches data from the API endpoint and returns what axios get returns', async () => {
  axios.get.mockResolvedValue({
    data: {
      id: 1,
      name: 'Yohan Moon',
    },
  });

  const user = await findOne(1);

  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name', 'Yohan Moon');
  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith(
    'https://jsonplaceholder.typicode.com/users/1'
  );
});
