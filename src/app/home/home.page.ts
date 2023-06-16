import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  inputValue: string = ''; // Variável para armazenar o valor do input
  resultado: any;
  valor1: any;
  valor2: any;
  operador: any;

  exibir(valor: number) {
    if (this.operador) {
      
      this.valor2 = valor;
    } else {
    
      this.valor1 = valor;
    }
    this.inputValue += valor; 
  }



  operacao(operador: any) {
    this.operador = operador; 
  }

  calcular() {
  
    switch (this.operador) {
      case '+':
        this.resultado = this.valor1 + this.valor2;
        break;
      case '-':
        this.resultado = this.valor1 - this.valor2;
        break;
      case '*':
        this.resultado = this.valor1 * this.valor2;
        break;
      case '/':
        this.resultado = this.valor1 / this.valor2;
        break;
      case '%':
        this.resultado = this.valor1 % this.valor2;
        break;
      default:
        this.resultado = null;
    }

  
    this.valor1 = null;
    this.valor2 = null;
    this.operador = null;


    this.inputValue = this.resultado;
  }

  limpar() {
    this.inputValue = ''; 
    this.valor1 = null; 
    this.valor2 = null; 
    this.operador = null; 
    this.resultado = null;
  }

  apagar() {
    this.inputValue = this.inputValue.slice(0, -1); 
  }
  

}
