import R from 'ramda'

function rule2validator (rule) {
  const regex = new RegExp(`^${rule}$`)
  const validator = R.test(regex)
  return validator
}

// http://devdocs.io/css/integer
const integerRule = /([+-]?\d+)/.source
const integerValidator = rule2validator(integerRule)

// http://devdocs.io/css/number
const numberRule = /([+-]?(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?)/.source
const numberValidator = rule2validator(numberRule)

// http://devdocs.io/css/percentage
const percentageUnitRule = /(%)/.source
const percentageRule = `(${numberRule}${percentageUnitRule})`
const percentageValidator = rule2validator(percentageRule)

// http://devdocs.io/css/length
const relativeLengthUnitRule = /(em|ex|cap|ch|ic|rem|lh|rlh)/.source
const viewportPercentageLengthUnitRule = /(vh|vw|vi|vb|vmin|vmax)/.source
const absoluteLengthUnitRule = /(px|mm|q|cm|in|pt|pc|mozmm)/.source
const lengthUnitRule = `(${relativeLengthUnitRule}|${viewportPercentageLengthUnitRule}|${absoluteLengthUnitRule})`
const lengthRule = `(0|(${numberRule}${lengthUnitRule}))`
const lengthValidator = rule2validator(lengthRule)

// http://devdocs.io/css/angle
const angleUnitRule = /(deg|grad|rad|turn)/.source
const angleRule = `(0|(${numberRule}${angleUnitRule}))`
const angleValidator = rule2validator(angleRule)

// http://devdocs.io/css/time
const timeUnitRule = /(s|ms)/.source
const timeRule = `(${numberRule}${timeUnitRule})`
const timeValidator = rule2validator(timeRule)

// http://devdocs.io/css/frequency
const frequencyUnitRule = /(Hz|kHz)/.source
const frequencyRule = `(${numberRule}${frequencyUnitRule})`
const frequencyValidator = rule2validator(frequencyRule)

// http://devdocs.io/css/value_definition_syntax#Keywords
const globalValueRule = /(inherit|initial|unset)/.source

// http://devdocs.io/css/css_box_model#Properties_controlling_the_size_of_a_box
const boxSizeValueRule = `((${lengthRule}|${percentageRule})(border-box|content-box)?)`
const boxSizeKeywordRule = /(available|min-content|max-content|fit-content|auto)/.source
const boxSizeValidator = R.anyPass([
  rule2validator(globalValueRule),
  rule2validator(boxSizeValueRule),
  rule2validator(boxSizeKeywordRule),
])

export {
  integerValidator,
  numberValidator,
  percentageValidator,
  lengthValidator,
  angleValidator,
  timeValidator,
  frequencyValidator,
  boxSizeValidator,
}
