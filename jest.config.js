module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
  },
};
