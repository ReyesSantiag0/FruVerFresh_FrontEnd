import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HeaderClientComponent } from './header-client/header-client.component';
import { HomePublicComponent } from './home-public/home-public.component';
import { FooterComponent } from './footer/footer.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ProductoService } from './shared/producto.service';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { UsuarioService } from './shared/usuario.service';
import { ComprarProductoComponent } from './comprar-producto/comprar-producto.component';
import { PedidoService } from './shared/pedido.service';
import { PedidoAdministradorComponent } from './pedido-administrador/pedido-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeClientComponent,
    HeaderLoginComponent,
    HeaderClientComponent,
    HomePublicComponent,
    FooterComponent,
    AdministradorComponent,
    EditarProductoComponent,
    ComprarProductoComponent,
    PedidoAdministradorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProductoService, UsuarioService, PedidoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
