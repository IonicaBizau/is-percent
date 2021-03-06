const lastChar = require("last-char");

/**
 * isPercent
 * Checks if a given value is in the percent format.",
 *
 * @name isPercent
 * @function
 * @param {String} input The input value.
 * @return {Boolean} `true`, if the given value is in the percent format, `false` otherwise.
 */
function isPercent(input) {
    return typeof input === "string" && lastChar(input.trim()) === "%" && !isNaN(parseFloat(input));
}

module.exports = isPercent;
