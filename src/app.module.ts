import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BookSchema } from './books/schemas/books.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://pedro:h89Mrzl6fTov6ELW@cluster0.fh8hu.mongodb.net/books?retryWrites=true&w=majority`,
    ),
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
