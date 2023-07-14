import { Injectable } from '@angular/core';
import { PedidoModel } from './pedido.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  obtenerPedidos() {
    return this.http.get<PedidoModel[]>(
      `${this.BASE_URL}/home-cliente/compras`
    );
  }
  agregarPedido(pedido: PedidoModel) {
    return this.http.post<string>(
      `${this.BASE_URL}/home-cliente/compras`,
      pedido
    );
  }
  borrarPedido(id_pedido: string) {
    return this.http.delete<string>(
      `${this.BASE_URL}/home-administrador/${id_pedido}`
    );
  }
}
