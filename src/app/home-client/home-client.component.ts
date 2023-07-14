import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css'],
})
export class HomeClientComponent implements OnInit {
  productos: Observable<ProductoModel[]> | undefined;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }
}
