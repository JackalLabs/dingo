import {AxiosResponse} from "axios";

import {PostBundle} from "./IPostBundle";

export default interface Core {
    bundle: PostBundle

    setRpc(rpc: string): void
    readRpc(): string

    postSimpleJson (simpleMethod: string): Promise<AxiosResponse>
}
