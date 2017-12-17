import { IFunctionMap } from './IFunctionMap';

export const CommandHandlers: IFunctionMap = {
    'category.actionName': (chatInstance, result): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('result');
        });
    },
}