module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/lib/**/*.{js,ts,tsx}',
    'packages/**/lib/*.{js,ts,tsx}',
    '!**/*-test.{js,ts,tsx}',
  ],
  coverageReporters: ['json', 'text-summary', 'lcov'],
  projects: ['<rootDir>/packages/*/jest.config.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
