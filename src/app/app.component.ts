import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { VendedorPerfilComponent } from './vendedor-perfil/vendedor-perfil.component';
import { ProdutoComponent } from "./produto/produto.component";
import { FinalCompraComponent } from "./final-compra/final-compra.component";


@Component({
  selector: 'app-root',
  imports: [HomeComponent, VendedorPerfilComponent, ProdutoComponent, FinalCompraComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-amado';
}