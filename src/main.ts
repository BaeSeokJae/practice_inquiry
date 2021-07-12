import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import path from 'path';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './httpException.filter';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000;
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  if (process.env.NODE_ENV === 'prodcution') {
    app.enableCors({
      origin: true,
      credentials: true,
    });
  } else {
    app.enableCors({
      origin: true,
      credentials: true,
    });
  }

  const config = new DocumentBuilder()
    .setTitle('B-Platform inquiry API')
    .setDescription('1:1 문의 관련 API 문서입니다.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const outputPath = path.resolve(process.cwd(), 'swagger.json');
  writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8' });
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`listening on post ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
