module.exports = {
  preset: "@testing-library/react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)",
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    "<rootDir>/jest.setup.js",
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svgMock.js",
  },
  collectCoverage: false,
  coverageDirectory: "__coverage__",
  coveragePathIgnorePatterns: ["/node_modules/", ".*.svg", ".*.png"],
};
