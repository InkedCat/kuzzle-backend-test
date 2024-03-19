import { Backend, Controller } from "kuzzle";

class ChatController extends Controller {

    constructor(app: Backend) {
        super(app);

        this.definition = {
            actions : {

            }
        };
    }
}

export { ChatController };  