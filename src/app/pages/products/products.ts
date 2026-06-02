import { CommonModule } from '@angular/common'; // <-- Vital para usar *ngFor
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule], // Asegura de importar CommonModule para usar *ngFor
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  // Aquí guardaremos la lista de cosméticos que nos devuelva Laravel
  listaProductos: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cargarInventario();
  }

  // Función que llama al servicio y se suscribe a la respuesta de la API
  cargarInventario(): void {
    this.productService.getProducts().subscribe({
      next: (datos) => {
        this.listaProductos = datos; // Guardamos los cosméticos en nuestra variable
      },
      error: (err) => {
        console.error(err);
        alert('Error al conectar con el servidor de Laravel al cargar el inventario.');
      }
    });
  }
}