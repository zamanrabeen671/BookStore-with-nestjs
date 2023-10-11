/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBook } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<IBook>) {}

  async getAllBooks(): Promise<IBook[]> {
    return await this.bookModel.find();
  }

  async getBook(id: string) {
    return await this.bookModel.findOne({ _id: id });
  }

  async createBook(book: IBook) {
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async updateBook(id: string, book: IBook) {
    return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
  }

  async delete(id: string) {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
