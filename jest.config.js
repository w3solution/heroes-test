module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '.e2e-spec.ts$',
    moduleNameMapper: {
      'src/(.*)': '<rootDir>/src/$1',
    },
  };
  