export interface IFunctionMap {
    [key: string]: (parameters:any) => Promise<string>;
}