import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TypeProduct } from '../typeProduct';
import { TypeProductsService } from './type-products.service';

@Component({
  selector: 'app-type-product',
  templateUrl: './type-product.component.html',
  styleUrls: ['./type-product.component.css']
})
export class TypeProductComponent implements OnInit {

  public typeProducts!: TypeProduct[];
  public typeProduct!: TypeProduct;
  constructor(private typeProductServe: TypeProductsService) { }

  ngOnInit(): void {
    this.getProductType()
  }

  public getProductType(): void {
    this.typeProductServe.getProductType().subscribe(
      (response: TypeProduct[]) => {
        this.typeProducts = response;
        console.log(this.typeProducts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProduct(addForm: NgForm): void {
    console.log(addForm.value)
    this.typeProductServe.addProductType(addForm.value).subscribe(
      (response: TypeProduct) => {
        console.log(response);
        this.getProductType();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateProductType(product: TypeProduct): void {
    console.log(product)
    this.typeProductServe.updateProductType(product).subscribe(
      (response: TypeProduct) => {
        console.log(response);
        this.getProductType();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProducts(productId: number): void {
    this.typeProductServe.deleteProductType(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProductType();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
