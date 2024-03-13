export default {
  moduleDirectories: ["node_modules", "lib"],
  moduleNameMapper: {
    "^lib/(.*)$": "<rootDir>/lib/$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
};
