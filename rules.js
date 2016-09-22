'use strict'

const conditions = require('./conditions.json')
const conditionals = require('./conditionals')
const RuleEngine = require('node-rules')

/** Map rules to be instantiated */
let rules = conditions.map((condition) => {
  return {
    condition: function (R) {
      let validate = conditionals[condition.operator]
      if (typeof validate === 'function' && this[condition.property]) {
        R.when(!validate(condition, this[condition.property]))
      }
    },
    consequence: function (R) {
      /** Another validations depending on result */
      this.result = false
      R.stop()
    }
  }
})

let rule = new RuleEngine()
rule.register(rules)

/** First example */
rule.execute({
  products: ['57e3f55e307299deac7d07f3'],
  price: 6000
}, function (result) {
  console.log('First Example', result)
})

/** Second example */
rule.execute({
  products: ['57e3f55e307299deac7d07f2'],
  price: 6000
}, function (result) {
  console.log('Second Example', result)
})

/** Third example */
rule.execute({
  products: ['57e3f55e307299deac7d07f2'],
  price: 1000
}, function (result) {
  console.log('Third Example', result)
})
