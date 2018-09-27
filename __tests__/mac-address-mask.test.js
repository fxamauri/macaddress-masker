import * as macAddressMask from '../src/'
// const macaddressformatter = require('../dist')

describe('MAC ADRESSS TESTS', () => {
  test('Mask - ALCLf2d27544 Results AL-CL-f2-d2-75-44', () => {
    const expected = 'AL-CL-f2-d2-75-44'
    // const received = macaddressformatter.formatter('ALCLf2d27544')
    const received = macAddressMask.mask('ALCLf2d27544')

    expect(received).toBe(expected)
  })

  test('unMask - AL-CL-f2-d2-75-44 Results ALCLf2d27544', () => {
    const expected = 'ALCLf2d27544'
    const received = macAddressMask.unmask('AL-CL-f2-d2-75-44')

    expect(received).toBe(expected)
  })
})
