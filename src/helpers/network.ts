import axios, {Method} from "axios"

import {PostBundle} from "../interfaces/IPostBundle";
import FilecoinResponse from "../interfaces/IFilecoinResponse";
import PushData from "@/interfaces/IPushData";

/** @internal */
export function postJson(filMethod: string, bundle: PostBundle, params?: any): Promise<FilecoinResponse> {
    const pushData: PushData = {
        method: 'POST' as Method,
        url: bundle.endpoint,
        data: {
            jsonrpc: "2.0",
            method: filMethod,
            id: 1,
            params: params
        }
    }
    pushData.headers = (bundle.tokenStr?.length) ? {"Authorization" : `Bearer ${bundle.tokenStr}`} : {}

    return axios(pushData)
        .then(res => res.data)
}
