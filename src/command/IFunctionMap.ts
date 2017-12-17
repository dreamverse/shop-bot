export interface IFunctionMap {
    Get(action: string, parameters:any): (params: any) => Promise<string>;
}