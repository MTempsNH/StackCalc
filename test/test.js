import assert from 'node:assert/strict';
import { StackCalc } from '../src/index.js';

describe('StackCalc', function () {
  
  describe('when exercised with ""', function () {
    it('should return 0', function () {
      assert.equal(StackCalc(""), 0);
    });
  });

  describe('when exercised with "5 6 +"', function () {
    it('should return 11', function () {
      assert.equal(StackCalc("5 6 +"), 11);
    });
  });

  describe('when exercised with "3 DUP +"', function () {
    it('should return 6', function () {
      assert.equal(StackCalc("3 DUP +"), 6);
    });
  });

  describe('when exercised with "6 5 5 7 * - /"', function () {
    it('should return 5', function () {
      assert.equal(StackCalc("6 5 5 7 * - /"), 5);
    });
  });

  describe('when exercised with "x y +"', function () {
    it('should return Invalid instruction', function () {
      assert.equal(StackCalc("x y +"), "Invalid instruction: x");
    });
  });
});