import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf;

  async onModuleInit() {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    if (!botToken) {
      console.error('Telegram Bot Token не указан. Проверьте переменную TELEGRAM_BOT_TOKEN в .env');
      return;
    }

    // Инициализация бота с токеном из .env
    this.bot = new Telegraf(botToken);

    // Обработчик команды /start
    this.bot.start((ctx) => ctx.reply('Добро пожаловать! Бот запущен и готов к работе.'));

    // Обработчик для любых текстовых сообщений
    this.bot.on('text', (ctx) => ctx.reply('Вы написали: ' + ctx.message.text));

    // Запуск бота
    await this.bot.launch();
    console.log('Telegram бот запущен и готов к работе');
  }
}
