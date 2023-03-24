import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './pages/actualizar-producto/actualizar-producto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { ListModificableProducComponent } from './pages/list-modificable-produc/list-modificable-produc.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';

const routes: Routes = [
  {path:'admProductos',component:ListModificableProducComponent},
  {path:'añadir-producto',component:AgregarProductoComponent},
  {path: 'actualizar-producto/:id',component:ActualizarProductoComponent},
  {path:'agregar-producto',component:AgregarProductoComponent},
  {path: 'producto-detalles/:id',component:ProductoDetallesComponent}
 /*  {path:'',redirectTo:'admProductos',pathMatch:'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
