var commando = require("discord.js-commando");
var Zeku = new commando.CommandoClient({
    owner: 'aQuiVeR',
    commandPrefix: 'z!'

});

Zeku.login('process.env.token')

Zeku.registry.registerGroup('other', 'Other');
Zeku.registry.registerCommandsIn(__dirname + "/commands")
Zeku.registry.registerDefaults();
