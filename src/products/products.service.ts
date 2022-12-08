import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  
  constructor(@InjectModel(Product.name) private productsModel:Model<ProductDocument>){}

  create(createProductDto: CreateProductDto) {
    return this.productsModel.create(createProductDto);
  }

  findAll() {
    return this.productsModel.find().lean();
  }

  findOne(id: string) {
    return this.productsModel.findOne({_id:id});
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productsModel.findByIdAndUpdate(id,{$set:updateProductDto});
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
