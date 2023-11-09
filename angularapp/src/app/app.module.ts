import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ListProductosComponent } from './components/productos/list-productos/list-productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PedidoComponent } from './components/pedidos/pedido/pedido.component';
import { ListPedidosComponent } from './components/pedidos/list-pedidos/list-pedidos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/clientes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    ProductosComponent,
    ListProductosComponent,
    PedidosComponent,
    PedidoComponent,
    ListPedidosComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
