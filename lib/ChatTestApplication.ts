import { Backend } from "kuzzle";

export class ChatTestApplication extends Backend {
  private databaseName: string;

  getDatabaseName() {
    return this.databaseName;
  }

  constructor(databaseName: string) {
    super("chat-test-application");
    this.databaseName = databaseName;
  }

  async start() {
    await super.start();

    this.log.info("Application started");
  }
}
