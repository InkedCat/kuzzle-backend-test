import { KDocumentContent } from "kuzzle";
import { CollectionMappings } from "kuzzle-sdk";

const MessageSchema : {mappings : CollectionMappings} = {
    mappings: {
        properties: {
            id: {type: "integer"},
            author: { type : "keyword" },
            content: { type : "keyword" }
        },
        dynamic: "strict",
    }
}

interface Message extends KDocumentContent  {
    author: string,
    content: string,
    timestamp: Date
}

export {MessageSchema, Message};