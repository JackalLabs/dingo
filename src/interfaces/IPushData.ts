import {Method} from "axios";
import GenericObject from "@/interfaces/IGenericObject";

export default interface PushData {
    method: Method,
    url: string,
    data: {
        jsonrpc: string,
        method: string,
        id: number,
        params?: any
    },
    headers?: GenericObject
}
