import { Backend, BadRequestError, Controller, KuzzleRequest } from "kuzzle";
import { ChatService } from "./ChatService";

class ChatController extends Controller {
    private service: ChatService;

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
                }
            }
        };
    }

    async getMessages(request: KuzzleRequest) {
        if(request.input.args.from < 0 || request.input.args.size < 0) {
            throw new BadRequestError("from and size must be positive numbers");
        }

        const from = request.input.args.from || 0;
        const size = request.input.args.size || 100;

        console.log(`from: ${from}, size: ${size}`);

        return await this.service.searchMessages( {sort: ["_kuzzle_info.createdAt"], from, size} );
    }
}

export { ChatController };  