import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //url para obtener la lista de productos de la base de datos
  private baseURL="http://localhost:8080/api/v1/productos"
 
  constructor(private httpClient : HttpClient) { }

 //metodo para obtener los productos
  obtenerListaDeProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  //este metodo añade productos
  agregarProducto(producto:Producto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,producto);
  }
//este metodo actualiza un producto

actualizarProducto(id: number, producto: Producto): Observable<Object> {
  return this.httpClient.patch(`${this.baseURL}/${id}`, producto);
}

//este metodo busca un producto
obtenerProductoId(id:number):Observable<Producto>{
  return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
}

//este metodo elimina un producto
eliminarProducto(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`)
}








}






