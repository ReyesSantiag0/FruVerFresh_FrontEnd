import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoModel } from './producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  obtenerProductos() {
    return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos`);
  }
  obtenerProducto(id_producto: string) {
    return this.http.get<ProductoModel[]>(
      `${this.BASE_URL}/productos/${id_producto}`
    );
  }
  agregarProducto(producto: ProductoModel) {
    return this.http.post<string>(`${this.BASE_URL}/productos`, producto);
  }
  actualizarProducto(producto: ProductoModel) {
    return this.http.put<string>(
      `${this.BASE_URL}/productos/${producto.id_producto}`,
      producto
    );
  }
  borrarProducto(id_producto: string) {
    return this.http.delete<string>(
      `${this.BASE_URL}/productos/${id_producto}`
    );
  }
  buscarProducto(nombre_producto: string) {
    const url = `${this.BASE_URL}/buscar`;
    return this.http.post<string>(url, {
      nombre_producto,
    });
  }
}
