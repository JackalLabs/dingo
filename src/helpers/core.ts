import {postJson} from "./network";

import PostBundle from "../interfaces/IPostBundle";
import CoreFrame from "@/interfaces/ICore";

export default class Core implements CoreFrame {
    bundle: PostBundle

    constructor (rpc: string, tokenStr: string, id?: number) {
        this.bundle = {
            endpoint: rpc,
            tokenStr: tokenStr,
            id: id || 1
        }
    }

    setRpc (rpc: string) {
        this.bundle.endpoint = rpc
    }
    readRpc () {
        return this.bundle.endpoint
    }
    setId (id: number) {
        this.bundle.id = id
    }
    readId () {
        return this.bundle.id
    }

    /** @internal */
    postSimpleJson (simpleMethod: string) {
        return postJson(simpleMethod, this.bundle)
    }
}