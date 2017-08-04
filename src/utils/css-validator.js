import R from 'ramda'

function rule2validator (rule) {
  const regex = new RegExp(`^${rule}$`)
  const validator = R.test(regex)
  return validator
}

function quadrupleRule (rule) {
  return `(${rule})( +(${rule})){0,3}`
}

function composeValidator (...validators) {
  return R.anyPass(validators)
}

/**
 * CSS / Cascading & Inheritance
 * http://devdocs.io/css-cascading-inheritance/
 */

// http://devdocs.io/css/all#Syntax
const globalValueRule = /(initial|inherit|unset|revert)/.source
const globalValueValidator = rule2validator(globalValueRule)

/**
 * CSS / Values & Units
 * http://devdocs.io/css-values-units/
 */

// http://devdocs.io/css/integer#Syntax
const integerRule = /([+-]?\d+)/.source
const integerValidator = rule2validator(integerRule)

// http://devdocs.io/css/number#Syntax
const numberRule = /([+-]?(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?)/.source
const numberValidator = rule2validator(numberRule)

// http://devdocs.io/css/percentage#Syntax
const percentageUnitRule = /(%)/.source
const percentageRule = `(${numberRule}${percentageUnitRule})`
const percentageValidator = rule2validator(percentageRule)

// http://devdocs.io/css/length#Syntax
const relativeLengthUnitRule = /(em|ex|cap|ch|ic|rem|lh|rlh)/.source
const viewportPercentageLengthUnitRule = /(vh|vw|vi|vb|vmin|vmax)/.source
const absoluteLengthUnitRule = /(px|mm|q|cm|in|pt|pc|mozmm)/.source
const lengthUnitRule = `(${relativeLengthUnitRule}|${viewportPercentageLengthUnitRule}|${absoluteLengthUnitRule})`
const lengthRule = `(0|(${numberRule}${lengthUnitRule}))`
const lengthValidator = rule2validator(lengthRule)

// http://devdocs.io/css/angle#Syntax
const angleUnitRule = /(deg|grad|rad|turn)/.source
const angleRule = `(0|(${numberRule}${angleUnitRule}))`
const angleValidator = rule2validator(angleRule)

// http://devdocs.io/css/time#Syntax
const timeUnitRule = /(s|ms)/.source
const timeRule = `(${numberRule}${timeUnitRule})`
const timeValidator = rule2validator(timeRule)

// http://devdocs.io/css/frequency#Syntax
const frequencyUnitRule = /(Hz|kHz)/.source
const frequencyRule = `(${numberRule}${frequencyUnitRule})`
const frequencyValidator = rule2validator(frequencyRule)

/**
 * CSS / Basic Box Model
 * http://devdocs.io/css-basic-box-model/
 */

// http://devdocs.io/css/css_box_model#Properties_controlling_the_size_of_a_box
const boxSizeValueRule = `((${lengthRule}|${percentageRule})(border-box|content-box)?)`
const boxSizeKeywordRule = /(available|min-content|max-content|fit-content|auto)/.source
const boxSizeValidator = composeValidator(
  globalValueValidator,
  rule2validator(boxSizeValueRule),
  rule2validator(boxSizeKeywordRule)
)

// http://devdocs.io/css/css_box_model#Properties_controlling_the_margins_of_a_box
const boxMarginValueRule = `(${lengthRule}|${percentageRule})`
const boxMarginKeywordRule = /(auto)/.source
const boxMarginSingleValidator = composeValidator(
  globalValueValidator,
  rule2validator(boxMarginValueRule),
  rule2validator(boxMarginKeywordRule)
)
const boxMarginRule = quadrupleRule(`(${boxMarginValueRule}|${boxMarginKeywordRule})`)
const boxMarginValidator = composeValidator(
  globalValueValidator,
  rule2validator(boxMarginRule)
)

// http://devdocs.io/css/border-width#Syntax
const borderWidthValueRule = `(${lengthRule})`
const borderWidthKeywordRule = /(thin|medium|thick|inherit)/.source
const borderWidthSingleValidator = composeValidator(
  globalValueValidator,
  rule2validator(borderWidthValueRule),
  rule2validator(borderWidthKeywordRule)
)
const borderWidthRule = quadrupleRule(`(${borderWidthValueRule}|${borderWidthKeywordRule})`)
const borderWidthValidator = composeValidator(
  globalValueValidator,
  rule2validator(borderWidthRule),
)

export {
  globalValueValidator,

  integerValidator,
  numberValidator,
  percentageValidator,
  lengthValidator,
  angleValidator,
  timeValidator,
  frequencyValidator,

  boxSizeValidator,
  boxMarginSingleValidator,
  boxMarginValidator,
  borderWidthSingleValidator,
  borderWidthValidator,
}
