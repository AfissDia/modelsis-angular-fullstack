import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeProduct } from '../typeProduct';

@Injectable({
  providedIn: 'root'
})
export class TypeProductsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProductType(): Observable<TypeProduct[]> {
    return this.http.get<TypeProduct[]>(`${this.apiServerUrl}/productType/all`);
  }

  public addProductType(product: TypeProduct): Observable<TypeProduct> {
    return this.http.post<TypeProduct>(`${this.apiServerUrl}/productType/add`, product);
  }

  public updateProductType(product: TypeProduct): Observable<TypeProduct> {
    return this.http.put<TypeProduct>(`${this.apiServerUrl}/productType/update`, product);
  }

  public deleteProductType(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/productType/delete/${productId}`);
  }
}
