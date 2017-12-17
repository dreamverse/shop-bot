import { IFunctionMap } from './IFunctionMap';
const _ = require('lodash');

export class CommandRepository implements IFunctionMap {
    handlers: { [x: string]: (params: any) => Promise<string>; };

    constructor() {
        this.init();
    }

    Get(action: string): (params: any) => Promise<string> {
        return this.handlers[action];
    }

    init() {
        this.handlers = {};
        // Create
        this.handlers['restock'] = (params): Promise<string> => {
            return new Promise((resolve, reject) => {
                let response = 'DEBUG> attempted to add (to stock):';
                _.forOwn(params, (key: any, value: any) => {
                    response += `\n${key} ${value}`
                })
                resolve(response);
            });
        },
        // Read
        this.handlers['view'] = (params): Promise<string> => {
            return new Promise((resolve, reject) => {
                let response = 'DEBUG> attempted to view:';
                _.forOwn(params, (key: any, value: any) => {
                    response += `\n${value}(${key})`
                })
                resolve(response);
            });
        },
        // Update
        this.handlers['edit'] = (params): Promise<string> => {
            return new Promise((resolve, reject) => {
                let response = 'DEBUG> attempted to edit:';
                _.forOwn(params, (key: any, value: any) => {
                    response += `\n${value} of: ${key}`
                })
                resolve(response);
            });
        },
        // Delete
        this.handlers['buy'] = (params): Promise<string> => {
            return new Promise((resolve, reject) => {
                let response = 'DEBUG> attempted to buy:';
                _.forOwn(params, (key: any, value: any) => {
                    response += `\n${key} ${value}`
                })
                resolve(response);
            });
        }
    }
}