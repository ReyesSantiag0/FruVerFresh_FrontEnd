import { Component, OnInit } from '@angular/core';
import { PedidoModel } from '../shared/pedido.model';
import { Observable } from 'rxjs';
import { PedidoService } from '../shared/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido-administrador',
  templateUrl: './pedido-administrador.component.html',
  styleUrls: ['./pedido-administrador.component.css'],
})
export class PedidoAdministradorComponent implements OnInit {
  pedidos: Observable<PedidoModel[]> | undefined;
  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidos = this.pedidoService.obtenerPedidos();
  }

  // BORRAR
  borrarPedido(id_pedido: string) {
    this.pedidoService.borrarPedido(id_pedido).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Pedido FruVerFresh eliminado',
        text: 'Eliminación exitosa!',
      });
      this.ngOnInit();
    });
  }
  // CONFIRMAR
  confirmarPedido() {
    Swal.fire({
      icon: 'success',
      title: 'Pedido FruVerFresh despachado',
      text: 'Confirmación exitosa!',
    });
  }
}
