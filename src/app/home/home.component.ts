import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import Toast from 'bootstrap/js/dist/toast';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent {

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('toastCarrinho', { static: false }) toastCarrinho!: ElementRef;


  imagens = [
    'assets/bicho.png', 
    'assets/Gary.jpg', 
    'assets/guardachuva.png',   
    'assets/avatar.jpg',
    'assets/amy.png',
    'assets/dedo.png',
    'assets/hornet.png',
    'assets/jujuba.png',
    'assets/camisa.png',
    'assets/clash.jpg',
    'assets/gato.png',
    'assets/gay.png',
  ];             

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  categoriasSelecionadas: string[] = [];
  produtosFiltrados: any[] = [];

  categorias = [
    {
      nome: 'Pride',
      itens: [
        { id: 'cat1', nome: 'Botton'},
        { id: 'cat2', nome: 'Ecobag' },
        { id: 'cat3', nome: 'Bandeira' },
        { id: 'cat4', nome: 'Camiseta' },
        { id: 'cat5', nome: 'Poster' },
      ]
    },

    {
      nome: 'Tema',
      itens: [
        { id: 'cat6', nome: 'Lésbicas' },
        { id: 'cat7', nome: 'Gays' },
        { id: 'cat8', nome: 'Bissexuais' },
        { id: 'cat9', nome: 'Trans' },
        { id: 'cat10', nome: 'Assexuais' },
        { id: 'cat11', nome: 'LGBT+' },
        { id: 'cat12', nome: 'Não-Binários' },
        { id: 'cat13', nome: 'Panssexuais' },
      ]
    },

    {
      nome: 'Acessórios',
      itens: [
        { id: 'cat14', nome: 'Meia' },
        { id: 'cat15', nome: 'Óculos' },
        { id: 'cat16', nome: 'Pulseira' },
        { id: 'cat17', nome: 'Pingente' },
        { id: 'cat18', nome: 'Chapéu' },
      ]
    }
  ];

  produtos = [
  {
    nome: 'Amy Rose',
    preco: 199.90,
    categoria: ['Lesbicas', 'Pulseira'],
    imagem: 'assets/amy.png'
  },
  {
    nome: 'Avatar',
    preco: 89.90,
    categoria: ['Poster', 'Trans'],
    imagem: 'assets/avatar.jpg'
  },
  {
    nome: 'Bicho Papão',
    preco: 49.90,
    categoria: ['Meia', 'Assexuais'],
    imagem: 'assets/bicho.png'
  },
  {
    nome: 'Camisa do Capeta',
    preco: 299.00,
    categoria: ['Camiseta', 'Gays'],
    imagem: 'assets/camisa.png'
  },
  {
    nome: 'Amor de Clash',
    preco: 159.90,
    categoria: ['Bandeira', 'Não-Binarios'],
    imagem: 'assets/clash.jpg'
  },
  {
    nome: 'Dedo Assassino',
    preco: 79.90,
    categoria: ['LGBT+', 'Botton', 'Camiseta'],
    imagem: 'assets/dedo.png'
  },
  {
    nome: 'O Mais Gostoso',
    preco: 129.90,
    categoria: ['Bissexuais', 'Panssexuais'],
    imagem: 'assets/Gary.jpg'
  },
  {
    nome: 'Miau',
    preco: 59.90,
    categoria: ['Óculos', 'Lesbicas'],
    imagem: 'assets/gato.png'
  },
  {
    nome: 'Viados',
    preco: 129.90,
    categoria: ['Gays', 'Panssexuais', 'Bissexuais', 'Pulseira', 'Chapéu'],
    imagem: 'assets/gay.png'
  },
];

  constructor() {
    this.produtosFiltrados = this.produtos;
  }

onCategoriaChange(event: any) {
    const categoria = event.target.value;
    if (event.target.checked) {
      this.categoriasSelecionadas.push(categoria);
    } else {
      this.categoriasSelecionadas = this.categoriasSelecionadas.filter(c => c !== categoria);
    }
    this.filtrarProdutos();
  }

  filtrarProdutos() {
  if (this.categoriasSelecionadas.length === 0) {
    this.produtosFiltrados = this.produtos;
  } else {
    this.produtosFiltrados = this.produtos.filter(produto =>
      produto.categoria.some((cat: string) => this.categoriasSelecionadas.includes(cat))
    );
  }
}

comprar(produto: any) {
    if (this.toastCarrinho) {
      // @ts-ignore
      const toast = new Toast(this.toastCarrinho.nativeElement, { delay: 2000 }); // 2 segundos
      toast.show();
    }
    // Aqui você pode adicionar lógica para adicionar ao carrinho
  }





}
