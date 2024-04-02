import { Bot } from "./deps.deno.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "1118961443:AAEYU3pDOXFzSX5IulkYsRKjaLG_zHPCOxQ");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
