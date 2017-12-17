import { IFunctionMap } from './IFunctionMap';

export const CommandHandlers: IFunctionMap = {
    'category.actionName': (params): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('result');
        });
    },
}