const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const express = require("express");

// ================= EXPRESS SERVER (FOR UPTIMEROBOT) =================

const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Optional root route
app.get("/", (req, res) => {
  res.status(200).send("Bot Alive");
});

// IMPORTANT for Render
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Web server running on port ${PORT}`);
});

// ================= DISCORD BOTS =================

// HR BOT
const hrBot = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// EVENT BOT
const eventBot = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// SYSTEM BOT
const sysBot = new Client({
  intents: [GatewayIntentBits.Guilds],
});


// HR BOT READY
hrBot.once("ready", () => {
  console.log(`HR Bot Logged in as ${hrBot.user.tag}`);

  hrBot.user.setPresence({
    activities: [{ name: "Managing HR Operations", type: ActivityType.Playing }],
    status: "online",
  });
});

// EVENT BOT READY
eventBot.once("ready", () => {
  console.log(`Event Bot Logged in as ${eventBot.user.tag}`);

  eventBot.user.setPresence({
    activities: [{ name: "Managing Events Slots", type: ActivityType.Watching }],
    status: "online",
  });
});

// SYSTEM BOT READY
sysBot.once("ready", () => {
  console.log(`Aura  Logged in as ${sysBot.user.tag}`);

  eventBot.user.setPresence({
    activities: [{ name: "Managing AURA ", type: ActivityType.Watching }],
    status: "online",
  });
});

// ================= ERROR HANDLING =================

process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});

// ================= LOGIN =================

if (!process.env.HR_TOKEN || !process.env.EVENT_TOKEN || !process.env.SYS_TOKEN) {
  console.error("❌ Bot tokens are missing in environment variables.");
  process.exit(1);
}

hrBot.login(process.env.HR_TOKEN);
eventBot.login(process.env.EVENT_TOKEN);
sysBot.login(process.env.SYS_TOKEN);
