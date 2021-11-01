type Foo = { foo: 1; baz: 3 | 4 };
type Bar = { bar: 3; baz: 4 | 5 };
type Baz = Foo & Bar;
/**
 * Outputs type
 * {
 *   foo: 1,
 *   bar: 3,
 *   baz: 4,
 * }
 */
type FooBar = {
  [K in keyof Foo & keyof Bar]: Foo[K] & Bar[K];
};
/**
 * Should outputs type
 * {
 *   baz: 4
 * }
 */
type Bazzzz = {
  [K in keyof Foo & keyof Bar]: Foo[K] | Bar[K];
};
/**
 * Should outputs type
 * {
 *   baz: 3 | 4 | 5
 * }
 */
const bar: Baz = {
  foo: 1,
  bar: 3,
  baz: 4,
};
const fooBar: FooBar = {
  baz: 4,
};
const bazz3: Bazzzz = {
  baz: 3,
};
const bazz4: Bazzzz = {
  baz: 4,
};
const bazz5: Bazzzz = {
  baz: 5,
};

// тебе надо реализовать типы утилиты под каждый кейс

// для этого тебе понадобятся техники Mapped types и Intersection
// учти что in в индексе мапед типа перебирает любой юнион который ты
// ему скормишь с правой сторонны и передает это в левую сторону

// и при интерсекшене двух юнионов ты получишь только общие для них значения
