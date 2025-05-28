import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

 export interface IMessage {
  id: string;
  text: string;
  fromMe: boolean;
  userId: string;
  createdAt: string;
  answeredTo: string | null
  files: any[];
  // status: TMessageStatus
}

export type TMessageStatus = 'delivered' | 'received'| 'read'

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  message = input<IMessage>()
}
