import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css']
})
export class ProductListComponent implements OnInit {

  products: any

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data) => { 
        this.products = data
        console.log('got value ' + data) 
      },
      (err) => { 
        console.error('something wrong occurred: ' + err) 
      }
    )
  }
}
