import { Component } from '@angular/core';
import { ChatInputComponent } from '../../shared/ui/chat-input/chat-input.component';
import { MessageComponent } from '../../components/message/message.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [ChatInputComponent, MessageComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatPage {
  messages = [
    {
      id: '1',
      text: 'Привет',
      fromMe: true,
      createdAt: '23.05.2025 12:00',
      // status: 'read',
      answeredTo: null,
      files: [],
      userId: '1',
    },
    {
      id: '2',
      text: 'Привет',
      fromMe: false,
      createdAt: '23.05.2025 12:00',
      answeredTo: null,
      // status: 'read',
      files: [],
      userId: '2',
    },
    {
      id: '3',
      text: 'Как дела?',
      fromMe: true,
      createdAt: '23.05.2025 12:00',
      answeredTo: '2',
      // status: 'read',
      files: [],
      userId: '1',
    },
    {
      id: '4',
      text: 'Хорошо/ Как у тебя?',
      fromMe: false,
      createdAt: '23.05.2025 12:00',
      answeredTo: null,
      // status: 'read',
      files: [],
      userId: '2',
    },
    {
      id: '5',
      text: 'И у меня все хорошо',
      fromMe: true,
      createdAt: '23.05.2025 12:00',
      answeredTo: null,
      // status: 'delivered',
      files: [],
      userId: '1',
    },
    {
      id: '6',
      text: 'Че делаешь?',
      fromMe: false,
      createdAt: '23.05.2025 12:00',
      answeredTo: null,
      // status: 'delivered',
      files: [],
      userId: '2',
    },
    {
      id: '7',
      text: 'Пишу приложение',
      fromMe: true,
      createdAt: '23.05.2025 12:00',
      answeredTo: null,
      // status: 'received',
      files: [],
      userId: '1',
    },
  ]
}
