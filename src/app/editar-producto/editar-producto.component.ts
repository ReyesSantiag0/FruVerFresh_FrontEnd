import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../shared/producto.model';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit {
  productos: Observable<ProductoModel[]> | undefined;
  producto = new ProductoModel('', '', '', 0, '');
  id_producto = '';
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();

    // editar
    this.id_producto = this.route.snapshot.params['id_producto'];
    console.log('El id del producto es ' + this.id_producto);
    this.productoService.obtenerProducto(this.id_producto).subscribe(
      (data) => {
        this.producto = data[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.productoService.actualizarProducto(this.producto).subscribe((data) => {
      this.router.navigate(['/home-administrador']);
      Swal.fire({
        icon: 'success',
        title: 'Pedido FruVerFresh actualizado',
        text: 'Actualización exitosa!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/home-administrador']).then(() => {
            window.location.reload();
          });
          this.ngOnInit();
        }
      });
    });
  }

  // BORRAR
  borrarProducto(id_producto: string) {
    this.productoService.borrarProducto(id_producto).subscribe((data) => {
      this.router.navigate(['/home-administrador']);
      Swal.fire({
        icon: 'success',
        title: 'Pedido FruVerFresh eliminado',
        text: 'Eliminación exitosa!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/home-administrador']).then(() => {
            window.location.reload();
          });
          this.ngOnInit();
        }
      });
    });
  }
}
