import orderByProps from '../app';

test('straight test', () => {
  const result = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['name', 'level']);
  const expected = [
    { name: 'мечник' },
    { level: 2 },
    { attack: 80 },
    { defence: 40 },
    { health: 10 }];
  expect(result).toEqual(expected);
});

test('alphabetical test', () => {
  const result = orderByProps({
    a: 1,
    d: 4,
    b: 2,
    c: 3,
  }, []);
  const expected = [
    { a: 1 },
    { b: 2 },
    { c: 3 },
    { d: 4 }];
  expect(result).toEqual(expected);
});
