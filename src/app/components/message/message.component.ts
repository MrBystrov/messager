import { Component, input } from '@angular/core';
import { IMessage } from '../../../../../common/src/types/message'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  message = input<IMessage>()
}
