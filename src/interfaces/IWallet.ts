import FilecoinResponse from "./IFilecoinResponse";

export default interface Wallet {
    balance (walAddress: string): Promise<FilecoinResponse>
    list (): Promise<FilecoinResponse>
    makeNew (): Promise<FilecoinResponse>
    defaultAddress (): Promise<FilecoinResponse>
    export (walAddress: string): Promise<FilecoinResponse>
    has (walAddress: string): Promise<FilecoinResponse>
    import (privateKey: string): Promise<FilecoinResponse>
    setDefault (walAddress: string): Promise<FilecoinResponse>
    sign (walAddress: string, data: any): Promise<FilecoinResponse>
    signMessage (walAddress: string, message: string): Promise<FilecoinResponse>
    validateAddress (walAddress: string): Promise<FilecoinResponse>
    verify (walAddress: string, signature: string, data: any): Promise<FilecoinResponse>
}
