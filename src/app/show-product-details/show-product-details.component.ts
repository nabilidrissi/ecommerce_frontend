import { Component, OnInit } from '@angular/core';
import {ProductService} from '../_services/product.service';
import {Product} from '../models/product.model';
import {HttpErrorResponse} from '@angular/common/http';
import {error} from 'protractor';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
    productDetails: Product[] = [];
    displayedColumns: string[] = ['Id', 'Product Name', 'product description', 'product discounted Price', 'product Actual Price', 'Edit', 'Delete'];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  public getAllProducts(){
    this.productService.getAllProducts().subscribe(
        (resp: Product[]) =>{
          console.log(resp);
          this.productDetails = resp;
        }, (error: HttpErrorResponse) =>{
          console.log(error);
        }
    );
  }
    deleteProduct(productId){
      this.productService.deleteProduct(productId).subscribe(
          (resp) =>{
              this.getAllProducts();
          },
          (error:HttpErrorResponse) =>{
              console.log(error);
          }
      )
    }

}
