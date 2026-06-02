import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa el formulario reactivo
import { Product, ProductService } from '../../services/product';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule], // Asegura de importar el ReactiveFormsModule
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})

export class RegistroComponent implements OnInit {
  // Aquí crearemos el objeto que controlará el formulario
  formProducto!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario y definimos las reglas de validación
    this.formProducto = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      brand: ['', [Validators.required, Validators.maxLength(255)]],
      category: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
  }

  // Esta función se activará cuando el usuario dé clic en "Guardar"
  onSubmit(): void {
    if (this.formProducto.valid) {
      const nuevoProducto: Product = this.formProducto.value;

      // Llamamos al servicio para enviarle los datos a Laravel
      this.productService.createProduct(nuevoProducto).subscribe({
        next: (respuesta) => {
          alert('¡Cosmético guardado con éxito!');
          this.formProducto.reset({ price: 0, stock: 0 }); // Limpiamos el formulario
        },
        error: (err) => {
          console.error(err);
          alert('Hubo un error al conectar con el servidor de Laravel.');
        }
      });
    } else {
      alert('Por favor, llena todos los campos correctamente.');
    }
  }
}