### Create a testing framework from scratch

#### Write a simple test

```javascript
const sum = (a, b) => a - b
const result = sum(4, 6)
const expected = 10
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
```

#### Create and use expect function

```javascript
function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
    toEqual() {},
    toBeGreaterThan() {},
    ...
  }
}

const sum = (a, b) => a - b
const result = sum(4, 6)
const expected = 10
expect(result).toBe(expected)
```

#### Create and use test function

```javascript
function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
    toEqual() {},
    ...
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`${title} passed`)
  } catch (error) {
    console.log(`${title} failed`)
    console.log(error)
  }
}

const sum = (a, b) => a - b
test('add 2 numbers', () => {
  const result = sum(4, 6)
  const expected = 10
  expect(result).toBe(expected)
})
```