import { areAnagrams } from './index';

describe.each([
  ['Cat', 'Act'],
  ['Save', 'Vase'],
  ['Elbow', 'Below'],
])('areAnagrams(%s, %s)', (first, second) => {
  it('return true with ignoreCase option', () => {
    expect(areAnagrams(first, second, { ignoreCase: true })).toBe(true);
  });

  it('return false without ignoreCase option', () => {
    expect(areAnagrams(first, second)).toBe(false);
  });
});
