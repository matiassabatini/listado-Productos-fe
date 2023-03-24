import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ListModificableProducComponent } from './pages/list-modificable-produc/list-modificable-produc.component';
import {HttpClientModule} from "@angular/common/http";
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component'
import { FormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './pages/actualizar-producto/actualizar-producto.component';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';
@NgModule({
  declarations: [
    AppComponent,
   
  
    ListModificableProducComponent,
    AgregarProductoComponent,
    ActualizarProductoComponent,
    ProductoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
