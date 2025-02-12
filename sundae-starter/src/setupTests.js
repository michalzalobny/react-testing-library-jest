import "@testing-library/jest-dom";

//
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

//Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any state in between the API tests
afterEach(() => server.resetHandlers());

// Clean up afters tests
afterAll(() => server.close());
