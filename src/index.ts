// eslint-disable-next-line import/no-extraneous-dependencies
import * as dotenv from 'dotenv';
import { Bot } from 'grammy';

dotenv.config();

const { BOT_TOKEN } = process.env;
if (!BOT_TOKEN) throw new Error('BOT_TOKEN is not defined');

const bot = new Bot(BOT_TOKEN);

bot.command('start', (ctx) => ctx.reply('Вітаю вас українською мовою!'));

bot.start();
