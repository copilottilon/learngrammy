import { Bot } from "./deps.deno.ts";

export const bot = new Bot(
  "1118961443:AAEYU3pDOXFzSX5IulkYsRKjaLG_zHPCOxQ", {
    client: {
      // We accept the drawback of webhook replies for typing status.
      canUseWebhookReply: (method) => true,
    }
  }
);


bot.command("start", async (ctx) => {
  const response = await ctx.reply("Bot ishlavotti.");
  console.log(response);
});

bot.command("ping", async (ctx) => {
  await ctx.reply(`Pong! ${new Date()} ${Date.now()}`)
});
