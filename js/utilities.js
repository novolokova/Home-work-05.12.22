"use strict";
/**
 *
 * @param {string} value
 * @returns {boolean}
 */
function checkSet(value) {
  if (typeof value !== "string") {
    throw new TypeError(`"${value}" must be string`);
  }
  if (value.length <= MIN_LENGHT) {
    throw new RangeError(`"${value}" must contain more than one letter`);
  }
  if (value[0] === value[0].toLowerCase()) {
    throw new Error(`the "${value}" must be capitalized`);
  }
  return true;
}
