import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Definimos una interfaz limpia para que Angular sepa qué datos maneja un cosmético
export interface Product {
  id?: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // La URL del microservicio de Laravel (Ajusta el puerto :8000 si tus corchetes [] abrieron ahí)
  private apiUrl = 'http://localhost/api/products';

  constructor(private http: HttpClient) { }

  /**
   * Obtener todos los productos (Para tu tabla de Inventario)
   * Corresponde al index() en Laravel
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Guardar un nuevo producto (Para tu formulario de Registro)
   * Corresponde al store() en Laravel
   */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}