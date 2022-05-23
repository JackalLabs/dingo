import {DWallet} from "./helpers/wallet";
import {DClient} from "./helpers/client";
import {postJson} from "./helpers/network";

import {PostBundle} from "./interfaces/IPostBundle";

export default class Dingo {
    bundle: PostBundle
    wallet
    client

    constructor (rpc: string, tokenStr: string, bundle?: PostBundle) {
        if (bundle) {
            this.bundle = bundle
        } else {
            this.bundle = {
                endpoint: rpc,
                tokenStr: tokenStr
            }
        }
        // children
        this.wallet = new DWallet(this.bundle)
        this.client = new DClient(this.bundle)

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
