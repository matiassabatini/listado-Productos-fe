import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-modificable-produc',
  templateUrl: './list-modificable-produc.component.html',
  styleUrls: ['./list-modificable-produc.component.scss']
})
export class ListModificableProducComponent implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerLosProductos(); 
  }

  private obtenerLosProductos() {
    this.productoService.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

  actualizarProducto(id: number) {
    this.router.navigate(['actualizar-producto', id]);
  }

  eliminarEmpleado(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar el producto?')) {
      this.productoService.eliminarProducto(id).subscribe(dato => {
        console.log(dato);
        this.obtenerLosProductos();
        alert('El producto ha sido eliminado con éxito.');
      });
    }
  }

  verDetallesProducto(id:number){
    this.router.navigate(['producto-detalles',id])
  }
}


