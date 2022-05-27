import FilecoinResponse from "./IFilecoinResponse";

import Wallet from "./IWallet";
import Client from "./IClient";

export default interface DingoFrame {
    client: Client
    wallet: Wallet

    version(): Promise<FilecoinResponse>
    shutdown(): Promise<FilecoinResponse>
    discover(): Promise<FilecoinResponse>

    daysToBlocks(days: number): number
    monthsToBlocks(months: number): number
    calculatePaddedSize(size: number): number
}
