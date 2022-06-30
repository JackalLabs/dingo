import FilecoinResponse from "./IFilecoinResponse";

export default interface Client {
    balance (path: string): Promise<FilecoinResponse>
    listImports (path: string): Promise<FilecoinResponse>
    genCar (path: string): Promise<FilecoinResponse>
    dealSize (CID: string): Promise<FilecoinResponse>
    dealPieceCID (CID: string): Promise<FilecoinResponse>
    getDealStatus (id: string): Promise<FilecoinResponse>
    getDealUpdates (path: string): Promise<FilecoinResponse>
    listDeals (path: string): Promise<FilecoinResponse>
    startDeal (CID: string, wallet: string, miner: string, pieceCID: string, size: number, price?: number, duration?: number): Promise<FilecoinResponse>
}
