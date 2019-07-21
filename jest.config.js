module.exports = {
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/config/__mocks__/file-mock.js`,
    gatsby: `<rootDir>/config/__mocks__/gatsby.js`,
  },
  setupFiles: [`<rootDir>/config/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  testURL: `http://localhost`,
  transform: {
    "^.+\\.jsx?$": `<rootDir>/config/jest-preprocess.js`,
  },
}
