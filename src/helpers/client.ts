import Core from "./core";

import {postJson} from "./network";
import Client from "../interfaces/IClient";

/** @internal */
export default class DClient extends Core implements Client{
    constructor (rpc: string, tokenStr: string) {
        super(rpc, tokenStr)
    }

    balance (path: string) {
        return postJson('Filecoin.ClientImport', this.bundle, [{Path: path, IsCAR: false}])
    }
    listImports (path: string) {
        return this.postSimpleJson('Filecoin.ClientListImports')
    }
    genCar (path: string) {
        return postJson('Filecoin.ClientGenCar', this.bundle, [{Path: path, IsCAR: true}, `${path}.car`])
    }
    dealSize (CID: string) {
        return postJson('Filecoin.ClientDealSize', this.bundle, [{'/': CID}])
    }
    dealPieceCID (CID: string) {
        return postJson('Filecoin.ClientDealPieceCID', this.bundle, [{'/': CID}])
    }
    getDealStatus (id: string) {
        return postJson('Filecoin.ClientGetDealStatus', this.bundle, [id])
    }
    getDealUpdates (path: string) {
        return this.postSimpleJson('Filecoin.ClientGetDealUpdates')
    }
    listDeals (path: string) {
        return this.postSimpleJson('Filecoin.ClientListDeals')
    }
    startDeal (CID: string, wallet: string, miner: string, pieceCID: string, size: number, price?: number, duration?: number) {
        const dealDetails = {
            Data: {
                TransferType: 'graphsync',
                Root: {'/': CID},
                PieceCid: null ,
                PieceSize: Number(size),
                RawBlockSize: 0,
            },
            Wallet: wallet,
            Miner: miner,
            EpochPrice: String(price || 1000),
            MinBlocksDuration: duration || 518400,
            ProviderCollateral: '0',
            DealStartEpoch: -1,
            FastRetrieval: true,
            VerifiedDeal: false
        }

        return postJson('Filecoin.ClientStartDeal', this.bundle, [dealDetails])
    }
}
