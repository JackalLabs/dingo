import axios, {AxiosResponse, Method} from "axios"

import {PostBundle} from "../interfaces/IPostBundle";

/** @internal */
export function postJson(filMethod: string, bundle: PostBundle, params?: any): Promise<AxiosResponse> {
    const pushData = {
        headers: {"Authorization" : `Bearer ${bundle.tokenStr}`},
        method: 'POST' as Method,
        url: bundle.endpoint,
        data: {
            jsonrpc: "2.0",
            method: filMethod,
            id: 1,
            params: params
        }
    }

    return axios(pushData)
        .then(res => res.data)
}
