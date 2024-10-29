import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  text:string = 'Texto';
  @Input({required:true})
  color:string = '';

  @Output()
  presionar = new EventEmitter<any>();

  emitirEvento(){
    this.presionar.emit("He hecho click");
  }

}