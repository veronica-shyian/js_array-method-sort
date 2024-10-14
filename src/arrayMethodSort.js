'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let conditionFunction = compareFunction;

    if (!conditionFunction) {
      conditionFunction = function (a, b) {
        return String(a) > String(b) ? 1 : -1;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const a = this[i];
        const b = this[j];
        const result = conditionFunction(a, b);

        if (result > 0) {
          this[j] = a;
          this[i] = b;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
