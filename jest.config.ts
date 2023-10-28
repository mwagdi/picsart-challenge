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
    '^@projectTypes(.*)$': '<rootDir>/types$1',
    '^@contexts(.*)$': '<rootDir>/contexts$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
  },
};
