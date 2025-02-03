import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://52.212.62.231:3001',
    ],
  });

  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
