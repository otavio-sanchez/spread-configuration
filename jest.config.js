module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
    "moduleNameMapper": {
      "^.+\\.svg$": "<rootDir>/__mocks__/svgMock.js"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };