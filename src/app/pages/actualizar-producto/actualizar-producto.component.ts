import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/producto.service';
import { Producto } from 'src/app/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.scss']
})
export class ActualizarProductoComponent implements OnInit {

  id: number;
  producto: Producto = new Producto();

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerProductoId(this.id).subscribe(
      producto => {
        this.producto = producto;
      },
      error => {
        console.log(error);
      }
    );
  }

  irALaListaDeProductos(): void {
    this.router.navigate(['/admProductos']);
    alert('El producto fue actualizado correctamente');
  }

  onSubmit(): void {
    this.productoService.actualizarProducto(this.id, this.producto).subscribe(
      response => {
        console.log(response);
        this.irALaListaDeProductos();
      },
      error => {
        console.log(error);
      }
    );
  }
}