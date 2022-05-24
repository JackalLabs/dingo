import {AxiosResponse} from "axios";

export default interface Wallet {
    balance (walAddress: string): Promise<AxiosResponse>
    list (): Promise<AxiosResponse>
    makeNew (): Promise<AxiosResponse>
    defaultAddress (): Promise<AxiosResponse>
    export (walAddress: string): Promise<AxiosResponse>
    has (walAddress: string): Promise<AxiosResponse>
    import (privateKey: string): Promise<AxiosResponse>
    setDefault (walAddress: string): Promise<AxiosResponse>
    sign (walAddress: string, data: any): Promise<AxiosResponse>
    signMessage (walAddress: string, message: string): Promise<AxiosResponse>
    validateAddress (walAddress: string): Promise<AxiosResponse>
    verify (walAddress: string, signature: string, data: any): Promise<AxiosResponse>
}
