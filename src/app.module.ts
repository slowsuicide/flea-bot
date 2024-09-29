import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramService } from './telegram/telegram.service';
import { UsersModule } from './users/users.module';
import { TelegramModule } from './telegram/telegram.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/entities/users.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST || 'localhost',
      port: parseInt(process.env.PG_PORT) || 5432,
      username: process.env.PG_NAME || 'sa',
      password: process.env.PG_PASSWORD || 'system',
      database: process.env.PG_DATABASE || 'flea',
      models: [Users], // Регистрируем модели
      autoLoadModels: true,
      synchronize: true, // Используйте только для разработки, не в продакшене!
    }),
    UsersModule,
    TelegramModule,
  ],
  controllers: [AppController],
  providers: [AppService, TelegramService],
})
export class AppModule {}
