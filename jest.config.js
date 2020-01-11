module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  setupFiles: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
};
