const utils = require('../index')
const test = require('ava')

test('setData(a, b, propArr)', t => {
  let a = { a: 1, b: 2 }
  utils.setData(a, { a: 'a', b: 'b', c: 'c', d: 'd' }, ['b', 'c'])
  t.deepEqual(a, { a: 1, b: 'b', c: 'c' }, `should return {a:1, b:'b',c:'c'} but get ${JSON.stringify(a)}`)
})

test('setData(a, b)', t => {
  let a = { a: 1, b: 2 }
  utils.setData(a, { b: 'b', c: 'c', d: 'd' })
  t.deepEqual(a, { a: 1, b: 'b', c: 'c', d: 'd' }, `should return { a: 1, b: 'b', c: 'c', d: 'd' } but get ${JSON.stringify(a)}`)
})
