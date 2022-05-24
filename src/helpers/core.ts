import {postJson} from "./network";

import {PostBundle} from "../interfaces/IPostBundle";

export default class Core {
    bundle: PostBundle

    constructor (rpc: string, tokenStr: string) {
        this.bundle = {
            endpoint: rpc,
            tokenStr: tokenStr
        }
    }

    setRpc (rpc: string) {
        this.bundle.endpoint = rpc
    }
    readRpc () {
        return this.bundle.endpoint
    }

    /** @internal */
    postSimpleJson (simpleMethod: string) {
        return postJson(simpleMethod, this.bundle)
    }
}