import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  producto : Producto = new Producto;

  constructor( private productoServicio:ProductoService,private router:Router){}

  ngOnInit():void{
  }

  guardarProducto():void{
this.productoServicio.agregarProducto(this.producto).subscribe(dato =>{
  console.log(dato);
  this.irAadmProducto();
 },error =>console.log(error));
}

irAadmProducto(){
  this.router.navigate(["/admProductos"])
}
  onSubmit(){
    this.guardarProducto();

  }
}
