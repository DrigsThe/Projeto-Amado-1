import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import Toast from 'bootstrap/js/dist/toast';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @ViewChild('toastCarrinho', { static: false }) toastCarrinho!: ElementRef;

  imagens: string[] = [
    'assets/amy.png',
    'assets/camisa.png',
    'assets/avatar.jpg',
    'assets/gato.png',
    'assets/clash.jpg',
    'assets/jujuba.png',
  ];
  imagemSelecionada: number = 0;

  cores: { nome: string, valor: string }[] = [
  { nome: 'Preto', valor: 'black' },
  { nome: 'Branco', valor: 'white' },
  { nome: 'Azul', valor: 'blue' },
  { nome: 'Vermelho', valor: 'red' }
];
corSelecionada: { nome: string, valor: string } = this.cores[0];

  quantidade: number = 1;

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  comprar() {
  if (this.toastCarrinho) {
    // @ts-ignore
    const toast = new Toast(this.toastCarrinho.nativeElement, { delay: 2000 });
    toast.show();
  }
  // Aqui você pode adicionar lógica para adicionar ao carrinho
}
}