import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-chat-input',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss'
})
export class ChatInputComponent {
  messageValue: string = ''
  @Output() messageSent = new EventEmitter<string>(); // Создаем событие
  handleClick = () => {
    if(this.messageValue.trim()){
      this.messageSent.emit(this.messageValue);
      this.messageValue = ''
    }
  }
}
