import { Client, GatewayIntentBits, ActivityType } from "discord.js";

const client1 = new Client({ intents: [GatewayIntentBits.Guilds] });
const client2 = new Client({ intents: [GatewayIntentBits.Guilds] });

client1.once("ready", () => {
  console.log(`Bot1 Online: ${client1.user.tag}`);
  client1.user.setPresence({
    activities: [{ name: "HR System", type: ActivityType.Watching }],
    status: "online"
  });
});

client2.once("ready", () => {
  console.log(`Bot2 Online: ${client2.user.tag}`);
  client2.user.setPresence({
    activities: [{ name: "Slot System", type: ActivityType.Watching }],
    status: "online"
  });
});

client1.login("MTQ2MDE2NjI1MTk1ODc2NzczMA.GwCOtW.KPB-8USo6x0N3EdaES8mX7LGewAWC3omksqVbo");
client2.login("TOKEN_2");
