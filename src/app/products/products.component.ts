import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products } from '../products';
import { TypeProduct } from '../typeProduct';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products!: Products[];
  public typeProducts!: TypeProduct[];
  // public editEmployee: Products;
  // public deleteEmployee: Products;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProductType();
  }


  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Products[]) => {
        this.products = response;
        //console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getProductType(): void {
    this.productService.getProductTypes().subscribe(
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
    this.productService.addProduct(addForm.value).subscribe(
      (response: Products) => {
        console.log(response);
        this.getProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateEmloyee(product: Products): void {
    this.productService.updateProduct(product).subscribe(
      (response: Products) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProducts(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
