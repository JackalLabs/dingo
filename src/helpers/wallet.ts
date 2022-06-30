import Core from "./core";

import {postJson} from "./network";
import Wallet from "../interfaces/IWallet";

/** @internal */
export default class DWallet extends Core implements Wallet {
    constructor (rpc: string, tokenStr: string) {
        super(rpc, tokenStr)
    }

    balance (walAddress: string) {
        return postJson('Filecoin.WalletBalance', this.bundle, [walAddress])
    }
    list () {
        return this.postSimpleJson('Filecoin.WalletList')
    }
    makeNew () {
        return postJson('Filecoin.WalletNew', this.bundle, ['bls'])
    }
    defaultAddress () {
        return this.postSimpleJson('Filecoin.WalletDefaultAddress')
    }
    delete (walAddress: string) {
        return postJson('Filecoin.WalletDelete', this.bundle, [walAddress])
    }
    export (walAddress: string) {
        return postJson('Filecoin.WalletExport', this.bundle, [walAddress])
    }
    has (walAddress: string) {
        return postJson('Filecoin.WalletHas', this.bundle, [walAddress])
    }
    import (privateKey: string) {
        return postJson('Filecoin.WalletImport', this.bundle, [{Type: "bls", PrivateKey: privateKey}])
    }
    setDefault (walAddress: string) {
        return postJson('Filecoin.WalletSetDefault', this.bundle, [walAddress])
    }
    sign (walAddress: string, data: any) {
        return postJson('Filecoin.WalletSign', this.bundle, [walAddress, data])
    }
    signMessage (walAddress: string, message: string) {
        return postJson('Filecoin.WalletSignMessage', this.bundle, [walAddress, message])
    }
    validateAddress (walAddress: string) {
        return postJson('Filecoin.WalletValidateAddress', this.bundle, [walAddress])
    }
    verify (walAddress: string, signature: string, data: any) {
        return postJson('Filecoin.WalletBalance', this.bundle, [walAddress, signature, {Type: 2, Data: data}])
    }
}
