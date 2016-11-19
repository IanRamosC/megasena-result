import {expect} from 'chai'
import megasena from '../src/megasena.js'

describe('Generated results', _ => {
  it('should be a string', done => {
    expect(megasena()).to.be.a('string')
    console.log(megasena())
    done()
  })
})
