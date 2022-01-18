import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';

import { ProductInterface } from './product.model';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    })
  }

  create(product: ProductInterface): Observable<ProductService> {
    return this.http.post<ProductService>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)),
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.baseUrl);
  }

  readById(id: number): Observable<ProductInterface> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ProductInterface>(url);
  }

  update(product: ProductInterface): Observable<ProductInterface> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<ProductInterface>(url, product);
  }

  delete(id: number): Observable<ProductInterface> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ProductInterface>(url);
  }
}
