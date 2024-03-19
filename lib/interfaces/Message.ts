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


export {MessageSchema};