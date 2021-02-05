### Jest and React Testing Library

#### Instructions

1. Install React Testing Library: `npm i -D @testing-library/react`
2. Install Movie App: `npm i`
3. Run Movie App: `npm start`
4. Test Movie App: `npm test`

#### Write Unit tests with Jest and React Testing Library

1. Test pure function: `src/utils/misc.test.js`
2. Render a component: `src/components/MoviesSpinner.test.js`
3. Debug DOM state: `src/components/MoviesSpinner.test.js`
4. Test component: `src/components/MoviesSpinner.test.js`
5. Create a snapshot test: `src/components/MoviesSpinner.test.js`

#### Write Service tests with Jest and React Testing Library

6. Mock HTTP requests: `src/services/getMovies.test.js`

#### Jest Configuration (Bonus)

7. Test Coverage Reports

`package.json`

```json
{
  ...,
  "scripts": {
    "test": "react-scripts test --coverage --watchAll",
  },
  "jest": {
    "coverageReporters": ["text"] or ["text-summary"]
  }
}
```
