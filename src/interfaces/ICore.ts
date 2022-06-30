import PostBundle from "./IPostBundle";
import FilecoinResponse from "@/interfaces/IFilecoinResponse";

export default interface CoreFrame {
    bundle: PostBundle

    setRpc(rpc: string): void
    readRpc(): string
    setId(id: number): void
    readId(): number

    postSimpleJson (simpleMethod: string): Promise<FilecoinResponse>
}
