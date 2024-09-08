import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { RegisterComponent } from './register/register.component';
import { ProductoComponent } from './producto/producto.component';


export const routes: Routes = [
    {path:'home', title: 'Home', component: HomeComponent},
    {path:'productos', title: 'Productos', component: ProductosComponent},
    {path:'producto/:id', title: 'Producto', component: ProductoComponent},
    {path:'register', title:'Register', component: RegisterComponent}
];
