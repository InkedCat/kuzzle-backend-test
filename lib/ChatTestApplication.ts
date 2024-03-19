import { Backend } from "kuzzle";

export class ChatTestApplication extends Backend {
  constructor() {
    super("chat-test-application");
  }

  async start() {
    await super.start();

    this.log.info("Application started");
  }
}
