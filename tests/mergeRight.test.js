import assert from 'assert'
import { mergeRight } from '../src'
import eq from './shared/eq'

describe('mergeRight', function() {
  it('takes two objects, merges their own properties and returns a new object', function() {
    const a = { w: 1, x: 2 }
    const b = { y: 3, z: 4 }
    eq(mergeRight(a, b), { w: 1, x: 2, y: 3, z: 4 })
  })

  it('overrides properties in the first object with properties in the second object', function() {
    const a = { w: 1, x: 2 }
    const b = { w: 100, y: 3, z: 4 }
    eq(mergeRight(a, b), { w: 100, x: 2, y: 3, z: 4 })
  })

  it('is not destructive', function() {
    const a = { w: 1, x: 2 }
    const res = mergeRight(a, { x: 5 })
    assert.notStrictEqual(a, res)
    eq(res, { w: 1, x: 5 })
  })

  it('reports only own properties', function() {
    const a = { w: 1, x: 2 }
    function Cla() {}
    Cla.prototype.x = 5
    eq(mergeRight(new Cla(), a), { w: 1, x: 2 })
    eq(mergeRight(a, new Cla()), { w: 1, x: 2 })
  })

  it('is shallow', function() {
    const a = { x: { u: 1, v: 2 }, y: 0 }
    const b = { x: { u: 3, w: 4 }, z: 0 }
    const res = mergeRight(a, b)
    assert.strictEqual(b.x, res.x)
    eq(res, { x: { u: 3, w: 4 }, y: 0, z: 0 })
  })
})
