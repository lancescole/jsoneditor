import { escapeHTML, unescapeHTML, findUniqueName, toCapital } from './stringUtils'

test('escapeHTML', () => {
  expect(escapeHTML('   hello  ')).toEqual('\u00A0\u00A0 hello \u00A0')
  expect(escapeHTML('\u00A0 hello')).toEqual('\u00A0 hello')
  expect(escapeHTML('hello\nworld')).toEqual('hello\\nworld')

  // TODO: test escapeHTML more thoroughly
})

test('unescapeHTML', () => {
  expect(unescapeHTML(' \u00A0 hello \u00A0')).toEqual('   hello  ')
  expect(unescapeHTML('\u00A0 hello')).toEqual('  hello')

  expect(unescapeHTML('hello\\nworld')).toEqual('hello\nworld')

  // TODO: test unescapeHTML more thoroughly
})

test('findUniqueName', () => {
  expect(findUniqueName('other', {'a': true, 'b': true, 'c': true})).toEqual('other')
  expect(findUniqueName('b', {'a': true, 'b': true, 'c': true})).toEqual('b (copy)')
  expect(findUniqueName('b', {'a': true, 'b': true, 'c': true, 'b (copy)': true})).toEqual('b (copy 2)')
  expect(findUniqueName('b', {'a': true, 'b': true, 'c': true, 'b (copy)': true, 'b (copy 2)': true})).toEqual('b (copy 3)')
})

test('toCapital', () => {
  expect(toCapital('hello')).toEqual('Hello')
  expect(toCapital('HEllo')).toEqual('Hello')
  expect(toCapital('HEllo')).toEqual('Hello')
  expect(toCapital('')).toEqual('')
  expect(toCapital(undefined)).toEqual(undefined)
})