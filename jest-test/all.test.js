const sum = require("./sum");

// Common Matchers
test("1 + 2 는 3과 같다.", () => {
  expect(sum(1, 2)).toBe(3);
});

test("객체 할당", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("양의 정수를 더한 결과가 0이 아님을 테스트", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Truthiness
test("null test", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero test", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers
test("Two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("Adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); // This won't work because of rounding error
  expect(value).toBeCloseTo(0.3);
});

// Strings
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('But there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// Arrays and iterables
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer",
];

test("The shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});

// Exceptions
function compileAndroidCode() {
  throw new Error("You are using the wrong JDK");
}

test("Compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
