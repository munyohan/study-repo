import axios from 'axios';
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

const findOne = id =>
  axios.get(`${API_ENDPOINT}/users/${id}`).then(response => response.data);

const mockFn = jest.fn();

// mockFn.mockReturnValue('I am a mock !');
// console.log(mockFn());

// mockFn.mockResolvedValue('I will be a mock!');
// mockFn().then(result => {
//   console.log(result);
// });

// afterEach(() => {});

// mockFn.mockImplementation(name => `I am ${name}!`);
// console.log(mockFn('Yohan'));

test('mocking test', () => {
  mockFn('a');
  mockFn(['b', 'c']);

  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).toBeCalledWith('a');
  expect(mockFn).toBeCalledWith(['b', 'c']);
});

test('spyOn test', () => {
  const calculator = {
    add: (a, b) => a + b,
  };

  const spyFn = jest.spyOn(calculator, 'add');
  const result = calculator.add(2, 3);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
  expect(result).toBe(5);
});

test('findOne returns a user', async () => {
  const user = await findOne(1);
  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name', 'Leanne Graham');
});

test('findOne fetches data from the API endpoint', async () => {
  const spyGet = jest.spyOn(axios, 'get');
  await findOne(1);
  expect(spyGet).toBeCalledTimes(1);
  expect(spyGet).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
});

test('findOne returns what axios get returns', async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: {
      id: 1,
      name: 'Yohan Moon',
    },
  });

  const user = await findOne(1);
  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name', 'Yohan Moon');
});
