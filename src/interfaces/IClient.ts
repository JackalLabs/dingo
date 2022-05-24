import {AxiosResponse} from "axios";

export default interface Client {
    balance (path: string): Promise<AxiosResponse>
    listImports (path: string): Promise<AxiosResponse>
    genCar (path: string): Promise<AxiosResponse>
    dealSize (CID: string): Promise<AxiosResponse>
    dealPieceCID (CID: string): Promise<AxiosResponse>
    getDealStatus (id: string): Promise<AxiosResponse>
    getDealUpdates (path: string): Promise<AxiosResponse>
    listDeals (path: string): Promise<AxiosResponse>
    startDeal (CID: string, wallet: string, miner: string, pieceCID: string, size: number, price?: number, duration?: number): Promise<AxiosResponse>
}
