import { Injectable } from '@nestjs/common'

import { Product } from './products.model'
@Injectable()
export class ProductsService {
   products: Product[] = [];

   insertProduct(title: string, desc: string, price: number){
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId; 
   }
}