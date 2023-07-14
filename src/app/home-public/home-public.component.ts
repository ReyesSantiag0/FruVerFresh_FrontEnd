import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.css'],
})
export class HomePublicComponent implements OnInit {
  productos: Observable<ProductoModel[]> | undefined;
  usuario = new UsuarioModel('', '', '', '', '', '', '', '2');
  correo_usuarioAut: string = '';
  contrasena_usuarioAut: string = '';
  nombre_producto: string = '';

  constructor(
    private productoService: ProductoService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }

  onSubmit() {
    //  AGREGAR
    this.usuarioService.agregarUsuario(this.usuario).subscribe((data) => {
      this.router.navigate(['/']);
      Swal.fire({
        icon: 'success',
        title: 'Ya eres parte de FruVerFresh',
        text: 'Usuario creado exitosamente!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        }
      });
    });
  }
  autenticar() {
    // AUTENTICAR
    this.usuarioService
      .autenticarUsuario(this.correo_usuarioAut, this.contrasena_usuarioAut)
      .subscribe(
        (response) => {
          if (this.correo_usuarioAut == 'adminfruverfresh@admin.com') {
            this.router.navigate(['/home-cliente']);
            Swal.fire({
              icon: 'success',
              title: 'Administrador FruVerFresh',
              text: 'Bienvenido!',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/home-administrador']).then(() => {
                  window.location.reload();
                });
              }
            });
          } else {
            this.router.navigate(['/home-cliente']);
            Swal.fire({
              icon: 'success',
              title: 'Cliente FruVerFresh',
              text: 'Bienvenido!',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/home-cliente']).then(() => {
                  window.location.reload();
                });
              }
            });
          }
        },
        (error) => {
          this.router.navigate(['/']);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error de atenticación!',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/']).then(() => {
                window.location.reload();
              });
            }
          });
        }
      );
  }
  anadirSinRegistro() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No puedes ver este producto porque no has iniciado sesión!',
    });
    this.router.navigate(['/']);
  }
}
