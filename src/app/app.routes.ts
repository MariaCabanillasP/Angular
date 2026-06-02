import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { RegistroComponent } from './pages/registro/registro';

export const routes: Routes = [
    { path: '', component: Home }, //Ruta raiz
    { path: 'products', component: Products }, //ruta de productos
    { path: 'registro', component: RegistroComponent }, //ruta de registro
    { path: '**', redirectTo: '' } //redireccionamiento a ruta raiz para cualquier ruta no definida
];
