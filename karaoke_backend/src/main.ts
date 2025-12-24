import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // อนุญาตให้ port 3000 ส่งข้อมูลมาได้
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 8000);
  console.log(
    `🚀 Application is running on: http://localhost:${process.env.PORT ?? 8000}`,
  );
}
bootstrap();
