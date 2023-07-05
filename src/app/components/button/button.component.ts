import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  @Output() posicaoSelecionada = new EventEmitter<number>();

  selecionarPosicao(posicao: number) {
    this.posicaoSelecionada.emit(posicao);
  }

}
