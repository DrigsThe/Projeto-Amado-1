import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Define a interface DadosFinais para tipagem dos dados
interface DadosFinais {
  contato: string;
  endereco: {
    logradouro: string;
    numero: string;
    cep: string;
    cidade: string;
    estado: string;
  };
  pagamento: string;
  entrega: string;
  subtotal: number;
  total: number;
  cupom: string;
  desconto: number;
  frete: number;
}

@Component({
  selector: 'app-final-compra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './final-compra.component.html',
  styleUrls: ['./final-compra.component.css'],
})
export class FinalCompraComponent implements OnInit {

  dadosFinais: DadosFinais = {
    contato: 'teste@teste.com',
    endereco: {
      logradouro: '',
      numero: '',
      cep: '',
      cidade: '',
      estado: ''
    },
    pagamento: '',
    entrega: 'padrão', // Padrão para frete grátis inicial
    subtotal: 343.40,
    total: 343.40,
    cupom: '',
    desconto: 0,
    frete: 0
  };

  message: { text: string, type: string } = { text: '', type: '' }; // Para mensagens de cupom
  showModal: boolean = false; // Para controlar a visibilidade do modal customizado
  modalContent: string = ''; // Conteúdo do modal customizado

  ngOnInit(): void {
    // Inicializa o total e frete quando o componente é carregado
    this.alterarTotal();
  }

  /**
   * Exibe um modal customizado com a mensagem fornecida.
   * @param content A mensagem a ser exibida no modal.
   */
  showCustomModal(content: string): void {
    this.modalContent = content;
    this.showModal = true;
  }

  /**
   * Fecha o modal customizado.
   */
  closeModal(): void {
    this.showModal = false;
    this.modalContent = '';
  }

  /**
   * Aplica um cupom de desconto se o valor for 'PRIDE10'.
   * Atualiza o desconto e recalcula o total.
   */
  aplicarCupom(): void {
    let newDesconto = 0;
    if (this.dadosFinais.cupom.toUpperCase() === 'PRIDE10') {
      newDesconto = 60.60;
      this.message = { text: `Cupom aplicado: ${this.dadosFinais.cupom} - Economia de R$ ${newDesconto.toFixed(2)}`, type: 'success' };
    } else {
      newDesconto = 0;
      this.message = { text: 'Cupom inválido.', type: 'error' };
    }
    this.dadosFinais.desconto = newDesconto;
    this.alterarTotal();
  }

  /**
   * Altera o valor do frete e recalcula o total da compra.
   */
  alterarTotal(): void {
    this.dadosFinais.frete = this.dadosFinais.entrega === 'express' ? 20.20 : 0;
    this.dadosFinais.total = this.dadosFinais.subtotal - this.dadosFinais.desconto + this.dadosFinais.frete;
  }

  /**
   * Finaliza a compra, validando os campos obrigatórios.
   * Exibe um modal de sucesso ou erro.
   */
  finalizeCompra(): void {
    if (!this.dadosFinais.contato || !this.dadosFinais.endereco.logradouro || !this.dadosFinais.endereco.numero || !this.dadosFinais.endereco.cep || !this.dadosFinais.endereco.cidade || !this.dadosFinais.endereco.estado) {
      this.showCustomModal('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
    this.showCustomModal('Compra finalizada com sucesso!');
  }
}
