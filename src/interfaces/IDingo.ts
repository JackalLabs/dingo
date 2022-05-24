import {AxiosResponse} from "axios";

import Wallet from "./IWallet";
import Client from "./IClient";

export default interface Dingo {
    client: Client
    wallet: Wallet

    version(): Promise<AxiosResponse>
    shutdown(): Promise<AxiosResponse>
    discover(): Promise<AxiosResponse>

    daysToBlocks(days: number): number
    monthsToBlocks(months: number): number
    calculatePaddedSize(size: number): number
}
