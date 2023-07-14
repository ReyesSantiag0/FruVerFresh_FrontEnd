import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientComponent } from './home-client/home-client.component';
import { HomePublicComponent } from './home-public/home-public.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ComprarProductoComponent } from './comprar-producto/comprar-producto.component';
import { PedidoAdministradorComponent } from './pedido-administrador/pedido-administrador.component';

const routes: Routes = [
  { path: '', component: HomePublicComponent },
  { path: 'home-cliente', component: HomeClientComponent },
  {
    path: 'home-administrador',
    component: AdministradorComponent,
  },
  {
    path: 'editar-producto/:id_producto',
    component: EditarProductoComponent,
  },
  {
    path: 'home-cliente/compras/:id_producto',
    component: ComprarProductoComponent,
  },
  {
    path: 'home-administrador/pedidos',
    component: PedidoAdministradorComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
