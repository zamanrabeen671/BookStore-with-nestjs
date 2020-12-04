import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-books.dto';
import { BooksService } from './books.service';
import { IBook } from './interfaces/books.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): Promise<IBook[]> {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: string): Promise<IBook> {
    return this.bookService.getBook(id);
  }

  @Post()
  createBook(@Body() bookDto: IBook): Promise<IBook> {
    return this.bookService.createBook(bookDto);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() bookDto: IBook): Promise<IBook> {
    return this.bookService.updateBook(id, bookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Promise<IBook> {
    return this.bookService.delete(id);
  }
}
