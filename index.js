const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

// HR BOT
const hrBot = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// EVENT BOT
const eventBot = new Client({
  intents: [GatewayIntentBits.Guilds],
});

hrBot.once("ready", () => {
  console.log(`HR Bot Logged in as ${hrBot.user.tag}`);
  hrBot.user.setPresence({
    activities: [{ name: "Managing HR Operations ", type: ActivityType.Playing }],
    status: "online",
  });
});

eventBot.once("ready", () => {
  console.log(`Event Bot Logged in as ${eventBot.user.tag}`);
  eventBot.user.setPresence({
    activities: [{ name: "Managing Events Slots ", type: ActivityType.Watching }],
    status: "online",
  });
});

hrBot.login(process.env.HR_TOKEN);
eventBot.login(process.env.EVENT_TOKEN);
