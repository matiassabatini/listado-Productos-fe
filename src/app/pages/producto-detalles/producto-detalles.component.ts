import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.scss']
})
export class ProductoDetallesComponent implements OnInit {

  id:number
  producto:Producto
  constructor( private route:ActivatedRoute,private productoServicio:ProductoService){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoId(this.id).subscribe(dato =>{
      this.producto =dato;
    });

  }

}
