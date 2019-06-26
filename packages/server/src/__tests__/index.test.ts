import { server } from '..'

test('Test response', () => {
  expect(server()).toBe('Hello from common!')
})
