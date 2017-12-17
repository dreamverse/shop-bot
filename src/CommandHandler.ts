const _ = require('lodash');

import { AppConfig } from './../AppConfig';
import { IFunctionMap } from './command/IFunctionMap';
import { CommandRepository } from './command/CommandRepository'

export class CommandHandler {
    commandRepository: CommandRepository

    constructor() {
        this.commandRepository = new CommandRepository();
    }

    handleRequest(action: string, params:any):Promise<string> {
        return new Promise((resolve, reject) => {
            const command = this.commandRepository.Get(action);
            if (command) {
                resolve(command(params));
            }
            resolve(`Action not found: ${action}.`);
        });
    }
}