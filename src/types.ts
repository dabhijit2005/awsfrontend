export interface THttpArgs {
    url: string,
    options? : {
        method? : string,
        body? : string,
        headers?: any
    }
}