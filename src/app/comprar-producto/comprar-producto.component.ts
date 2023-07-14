import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../shared/producto.service';
import { ProductoModel } from '../shared/producto.model';
import { PedidoService } from '../shared/pedido.service';
import { PedidoModel } from '../shared/pedido.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css'],
})
export class ComprarProductoComponent implements OnInit {
  producto = new ProductoModel('', '', '', 0, '');
  pedido = new PedidoModel('', '', '', '', '', '', '', 0, 0);

  id_producto = '';
  constructor(
    private productoService: ProductoService,
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener Producto por ID
    this.id_producto = this.route.snapshot.params['id_producto'];
    this.productoService.obtenerProducto(this.id_producto).subscribe(
      (data) => {
        (this.producto = data[0]),
          (this.pedido.producto_pedido = this.producto.nombre_producto),
          (this.pedido.cantidad_pedido = 1),
          (this.pedido.precio_pedido = this.producto.precio_producto);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  comprar() {
    //  COMPRAR
    this.pedidoService.agregarPedido(this.pedido).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Pedido FruVerFresh en Camino',
        text: 'Compra exitosa!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/home-cliente']).then(() => {
            window.location.reload();
          });
        }
      });
    });
  }
}
