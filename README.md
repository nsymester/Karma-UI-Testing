# Karma & Mocha setup to run browser tests

Sample project setting up Karma to run Mocha tests, also using Chai for assertions.

## Installation

`$ npm i`

## Run tests

`$ npm test`

## Chai usage

- If you're using BDD to evaluate your tests then use the styles `expect` and `should`.

  - Both use the same chainable language to construct assertions, but they differ in the way an assertion is initially constructed.

- If you're using Assert to evaluate your tests then use the style `assert`.

## Testing a HTML and jQuery component

1. Start scenaria
2. Before each test load the component
3. Execute test
4. After each test cleanup

## References

[Chai Assertion Styles](https://www.chaijs.com/guide/styles/)

[Setting up Karma & Mocha to run browser tests](https://github.com/jazanne/karma-mocha-example)

[Getting started with Karma and Mocha for automated browser tests](https://jazanne.com/2018/09/10/getting-started-with-karma-and-mocha-for-automated-browser-tests/)

[Karma Tutorial - Unit Testing JavaScript](http://www.bradoncode.com/blog/2015/02/27/karma-tutorial/)
