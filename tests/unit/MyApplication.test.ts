import { MyApplication, MyApplicationConfig } from "../../lib/MyApplication";
import { Plugin } from "kuzzle";
import { appSettings } from "./utils";

// We need to supress the singleton behavior of the Backend class for unit testing purpose
Reflect.defineProperty(global, "app", {
  set() {
    /* Do nothing */
  },
});

describe("MyApplication", () => {
  const instance = new MyApplication(appSettings as MyApplicationConfig);
  describe("constructor", () => {
    it("should instantiate a MyApplication", () => {
      expect(instance.plugin.get("prometheus")).toBeInstanceOf(Plugin);
    });
  });
});
