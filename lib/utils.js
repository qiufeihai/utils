const R = require('ramda')
const is = require('is-type-of')

/**
 * 把b对象的指定的属性赋值给a对象
 * example:setData({c:'c'}, {a:1,b:2,c:3,d:{e:4}}, ['a', 'b']) // {"a": 1, "b": 2, "c": "c"}
 */
exports.setData = function (a, b, propArr) {
  if (!is.object(a) || !is.object(b)) throw new TypeError('a and b must be an object')
  Object.assign(a, propArr && Array.isArray(propArr) ? R.pickAll(propArr, b) : b)
}
