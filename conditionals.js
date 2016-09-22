'use strict'

/** Conditionals */
module.exports = {
  in: function (rule, value) {
    if (!Array.isArray(value)) return false

    for (let _value of value) {
      if (~rule.value.indexOf(_value)) return true
    }

    return false
  },

  lt: function (rule, value) {
    if (isNaN(value)) return false
    return rule.value < value
  }
}
