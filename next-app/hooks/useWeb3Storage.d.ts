export default function useWeb3Storage(): (file: File) => Promise<{
    cid: import("web3.storage/dist/src/lib/interface").CIDString;
    uri: string;
    info: import("web3.storage/dist/src/lib/interface").Status | undefined;
}>;
