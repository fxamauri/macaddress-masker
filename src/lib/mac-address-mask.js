import macAddressUnmask from './mac-address-unmask'
const MAC_LENGTH = 12

const HYPHEN_INDEXES = [1, 3, 5, 7, 9]

const isLastChar = (index, str) => index === str.length - 1

export default (mac) => {
  if (!mac) return ''

  const unmaskedMac = macAddressUnmask(mac)

  return unmaskedMac
    .slice(0, MAC_LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`
      if (!isLastChar(index, mac)) {
        if (HYPHEN_INDEXES.includes(index)) return `${result}-`
      }
      return result
    }, '')
}
