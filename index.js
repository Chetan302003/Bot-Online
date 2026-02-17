const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Simple web route
app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(PORT, () => {
  console.log("Web server running");
});

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
    activities: [{ name: "Managing HR", type: ActivityType.Playing }],
    status: "online",
  });
});

eventBot.once("ready", () => {
  console.log(`Event Bot Logged in as ${eventBot.user.tag}`);
  eventBot.user.setPresence({
    activities: [{ name: "Managing Events", type: ActivityType.Watching }],
    status: "online",
  });
});

hrBot.login(process.env.HR_TOKEN);
eventBot.login(process.env.EVENT_TOKEN);
