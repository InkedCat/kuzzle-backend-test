import { ChatController } from "./lib/modules/ChatController";
import { ChatTestApplication } from "./lib/ChatTestApplication";
import { ChatService } from "./lib/modules/ChatService";

const databaseName = "kuzzle-chatdb";

const app = new ChatTestApplication(databaseName)

const chatService = new ChatService(app);
const chatController = new ChatController(app, chatService);

app.controller.use(chatController);

app.start();
