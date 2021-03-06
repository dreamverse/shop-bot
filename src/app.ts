const Discord = require('discord.js');
const client = new Discord.Client();
const parseArgs = require('minimist');
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false    
});

import { CommandHandler } from './CommandHandler';
import { AppConfig } from './../AppConfig';

class App {
    useDiscord = false;
    useCli = true;
    config = new AppConfig();

    start() {
        if (this.useDiscord) {
            this.startDiscordBot();
        }
        if (this.useCli) {
            this.startCli();
        }
    }

    startDiscordBot() {
        // The ready event is vital, it means that your bot will only start reacting to information
        client.on('ready', () => {
            console.log('I am ready');
        });
    
        // Create an event listener for messages
        client.on('message', (instance: any) => {
            if (instance.content.includes(`<@${this.config.BOT_ID}>`)) {
                let message = instance.content;
                if (message.includes(`<@${this.config.BOT_ID}> `)) {
                    message = message.replace(`<@${this.config.BOT_ID}> `, '');
                }
    
                if (message === '') {
                    instance.channel.send('(｡･ω･｡) ?');
                }
                
                //const handler = new CommandHandler(client);
                //handler.handleRequest(instance, message);
            }
        });
    
        // Log our bot in
        client.login(this.config.BOT_TOKEN);
    }

    startCli() {
        const handler = new CommandHandler();
        readLine.on('line', (line: string) => {
            const params = parseArgs(line.split(" "));
            console.log('DEBUG>', params);
            const action = params._;
            delete params._;
            
            handler.handleRequest(action, params).then(response => {
                console.log(response);
            });
        });
    }
}


const app = new App();
app.start();