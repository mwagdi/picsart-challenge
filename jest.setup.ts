import '@testing-library/jest-dom';

import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks(); // Enable fetch mocking

beforeEach(() => {
  fetchMock.resetMocks(); // Reset the fetch mocks before each test
});
