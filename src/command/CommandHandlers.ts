import { IFunctionMap } from './IFunctionMap';
const _ = require('lodash');

export const CommandHandlers: IFunctionMap = {
    // Create
    'restock': (params): Promise<string> => {
        return new Promise((resolve, reject) => {
            let response = 'DEBUG> attempted to add (to stock):';
            _.forOwn(params, (key: any, value: any) => {
                response += `\n${key} ${value}`
            })
            resolve(response);
        });
    },
    // Read
    'view': (params): Promise<string> => {
        return new Promise((resolve, reject) => {
            let response = 'DEBUG> attempted to view:';
            _.forOwn(params, (key: any, value: any) => {
                response += `\n${value}(${key})`
            })
            resolve(response);
        });
    },
    // Update
    'edit': (params): Promise<string> => {
        return new Promise((resolve, reject) => {
            let response = 'DEBUG> attempted to edit:';
            _.forOwn(params, (key: any, value: any) => {
                response += `\n${value} of: ${key}`
            })
            resolve(response);
        });
    },
    // Delete
    'buy': (params): Promise<string> => {
        return new Promise((resolve, reject) => {
            let response = 'DEBUG> attempted to buy:';
            _.forOwn(params, (key: any, value: any) => {
                response += `\n${key} ${value}`
            })
            resolve(response);
        });
    },
}