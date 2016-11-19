import {expect} from 'chai'
import megasena from '../src/megasena.js'

describe('MegaSena Results', _ => {
  it('should have the right types', done => {
    expect(megasena(6, true)).to.be.a('string')
    expect(megasena(6)).to.be.a('array')
    done()
  })

  it('should have the right length', done => {
    let length = 9;
    let result = megasena(length);

   expect(result).to.have.length(length)
    done()
  })

  it('should throw a type error', done => {
    expect(_ => megasena('foo')).to.throw(TypeError)
    done()
  })
})
