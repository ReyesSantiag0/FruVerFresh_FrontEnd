import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css'],
})
export class HeaderClientComponent implements OnInit {
  nombre_producto: string = '';

  constructor(private productoService: ProductoService) {}
  ngOnInit() {}

  buscarProducto() {
    this.productoService.buscarProducto(this.nombre_producto).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Genial...',
          text: 'Producto en stock!',
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Producto sin stock!',
        });
      }
    );
  }
}
