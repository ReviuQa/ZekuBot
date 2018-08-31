var commando = require('discord.js-commando');

class about extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'other',
            memberName: 'about',
            description: 'This is about made by aQuiVeR!'
        });
    }
    async run(message, args){
        message.reply("This bot was made by aQuiVeR with VS code and Node.JS.");
}

}
module.exports = about;