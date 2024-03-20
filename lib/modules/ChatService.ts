import { JSONObject, KHit, SearchResult } from "kuzzle";
import { ChatTestApplication } from "lib/ChatTestApplication";
import { Message } from "lib/interfaces/Message";

class ChatService {
    private app: ChatTestApplication;

    constructor(app: ChatTestApplication) {
        this.app = app;
    }

    async createMessage(author: string, content: string) {
        await this.app.sdk.document.create(this.app.getDatabaseName(), "chat-messages", {author, content});
    }

    async searchMessages(query: JSONObject, options: JSONObject): Promise<SearchResult<KHit<Message>>> {
        return await this.app.sdk.document.search<Message>(this.app.getDatabaseName(), "chat-messages", query, options);
    }

    async notifyBadWord(author: string) {
        await this.app.sdk.realtime.publish("kuzzle-chatdb", "chat-messages", {author, warning: "bad word"});
    }
}

export { ChatService };