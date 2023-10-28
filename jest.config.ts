module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@client(.*)$': '<rootDir>/client$1',
    '^@queries(.*)$': '<rootDir>/queries$1',
    '^@types(.*)$': '<rootDir>/types$1',
  },
};
