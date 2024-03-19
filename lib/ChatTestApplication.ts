import { Backend } from "kuzzle";
import { MessageSchema } from "./interfaces/Message";

export class ChatTestApplication extends Backend {
  private databaseName: string;

  getDatabaseName() {
    return this.databaseName;
  }

  constructor(databaseName: string) {
    super("chat-test-application");
    this.databaseName = databaseName;
  }

  private async init() {
    const indexPresent = await this.sdk.index.exists(this.databaseName);
    const collectionPresent = await this.sdk.collection.exists(this.databaseName, "chat-messages");

    if(!indexPresent) {
      await this.sdk.index.create(this.databaseName);
    }

    if(!collectionPresent) {
      await this.sdk.collection.create(this.databaseName, "chat-messages", MessageSchema);
    } else {
      await this.sdk.collection.update(this.databaseName, "chat-messages", MessageSchema);
    }
  }

  async start() {
    await super.start();

    await this.init();

    this.log.info("Application started");
  }
}
