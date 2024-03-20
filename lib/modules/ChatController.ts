import { Backend, BadRequestError, Controller, KuzzleRequest } from "kuzzle";
import { ChatService } from "./ChatService";

class ChatController extends Controller {
    private service: ChatService;
    private badWords: string[] = ["MERDE"];

    constructor(app: Backend, service: ChatService) {
        super(app);
        this.service = service;

        this.definition = {
            actions : {
                getMessages: {
                    handler: this.getMessages,
                    http: [
                        { verb: "get", path: "chat/messages" }
                    ]
                },
                sendMessage: {
                    handler: this.sendMessage,
                    http: [
                        { verb: "post", path: "chat/messages" }
                    ]
                }
            }
        };
    }

    async sendMessage(request: KuzzleRequest) {
        if(!request.input.body.author || !request.input.body.content) {
            throw new BadRequestError("Missing required fields");
        }

        if(request.input.body.content.length > 255) {
            throw new BadRequestError("Message content cannot exceed 255 characters");
        }

        const containBadWord = this.badWords.some(badWord => request.input.body.content.toUpperCase().includes(badWord));

        if(containBadWord) {
            await this.service.notifyBadWord(request.input.body.author);
            
            throw new BadRequestError("Message contains bad word");
        }

        await this.service.createMessage(request.input.body.author, request.input.body.content);
    }

    async getMessages(request: KuzzleRequest) {
        if(request.input.args.from < 0 || request.input.args.size < 0) {
            throw new BadRequestError("from and size must be positive numbers");
        }

        const from = request.input.args.from || 0;
        const size = request.input.args.size || 100;

        return await this.service.searchMessages( {sort: ["_kuzzle_info.createdAt"]} , {from, size} );
    }
}

export { ChatController };  