import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { ProductoModel } from '../shared/producto.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  productos: Observable<ProductoModel[]> | undefined;
  producto = new ProductoModel('', '', '', 0, '');
  id_producto = '';
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }
  onSubmit() {
    this.productoService.agregarProducto(this.producto).subscribe((data) => {
      this.router.navigate(['/home-administrador']);
      Swal.fire({
        icon: 'success',
        title: 'Producto FruVerFresh agregado',
        text: 'Registro exitoso!',
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
