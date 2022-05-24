import Core from "./helpers/core";
import DClient from "./helpers/client";
import DWallet from "./helpers/wallet";

export default class Dingo extends Core {
    wallet
    client

    constructor (rpc: string, tokenStr: string) {
        super(rpc, tokenStr)
        // children
        this.wallet = new DWallet(rpc, tokenStr)
        this.client = new DClient(rpc, tokenStr)
    }

    version () {
        return this.postSimpleJson("Filecoin.Version")
    }
    shutdown () {
        return this.postSimpleJson("Filecoin.Shutdown")
    }
    discover () {
        return this.postSimpleJson("Filecoin.Discover")
    }

    // Utility Functions
    daysToBlocks (days: number) {
        return 2788 * Number(days)
    }
    monthsToBlocks (months: number) {
        return 86400 * Number(months)
    }
    calculatePaddedSize (size: number) {
        const x = Number(size)
        const val = Math.ceil(x / 127);
        return 127 * Math.pow(2, (Math.ceil(Math.log(val))));
    }
}
