// jest.config.js

const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./" // Path to your Next.js app
})

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    // Map your alias '@' to the root directory
    "^@/(.*)$": "<rootDir>/$1",

    // Mock CSS modules
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",

    // Mock static assets
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },

  moduleDirectories: ["node_modules", "<rootDir>/"]
}

module.exports = createJestConfig(customJestConfig)
