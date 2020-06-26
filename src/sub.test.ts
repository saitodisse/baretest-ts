import baretest from 'baretest';
import assert from 'assert';
import { sub } from './sub';

const test = baretest('Sub');

test('1 - 2', () => {
  assert.equal(sub(1, 2), -1);
});

test('2 - 3', () => {
  assert.equal(sub(2, 3), -1);
});

test('2 - 7', () => {
  assert.equal(sub(2, 7), -5);
});

test.run();
