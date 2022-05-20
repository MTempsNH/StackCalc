import assert from 'node:assert/strict';
import { StackCalc } from '../src/index.js';

describe('StackCalc', function () {
  describe('when exercised it', function () {
    it('should return 1', function () {
      assert.equal(StackCalc("5 6 +"), 11);
    });
  });
});