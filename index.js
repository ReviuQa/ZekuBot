var commando = require("discord.js-commando");
var Zeku = new commando.CommandoClient({
    owner: 'aQuiVeR',
    commandPrefix: 'z!'

});

Zeku.login('NDg0OTk3MjQ4OTM4NDEwMDE0.DmqIfQ.OWItmqMDaqMSmxP0zHyB3i12qXo')

Zeku.registry.registerGroup('other', 'Other');
Zeku.registry.registerCommandsIn(__dirname + "/commands")
Zeku.registry.registerDefaults();