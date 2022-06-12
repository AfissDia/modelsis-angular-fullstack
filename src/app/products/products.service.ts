import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../products';
import { TypeProduct } from '../typeProduct';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiServerUrl}/product/all`);
  }

  public getProductTypes(): Observable<TypeProduct[]> {
    return this.http.get<TypeProduct[]>(`${this.apiServerUrl}/productType/all`);
  }

  public addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiServerUrl}/product/add`, product);
  }

  public updateProduct(product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiServerUrl}/product/update`, product);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${productId}`);
  }

}
