const _ = require('lodash');

import { AppConfig } from './../AppConfig';
import { IFunctionMap } from './command/IFunctionMap';
import { CommandHandlers } from './command/CommandHandlers'

export class CommandHandler {
    handlers: IFunctionMap = CommandHandlers;

    handleRequest(action: string, params:any):Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.handlers[action]) {
                resolve(this.handlers[action](params));
            } else {
                reject(`Unknown action: ${action}`);
            }
        });
    }
}