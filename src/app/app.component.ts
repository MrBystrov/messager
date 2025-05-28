import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { ButtonComponent } from './shared/ui/button/button.component';
import { AvatarComponent } from './shared/ui/avatar/avatar.component';
import {
  TButtonColor,
  TButtonPadding,
} from './shared/ui/button/button.component';
import { ChatPage } from './pages/chat/chat.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  routes: Routes = routes
  // title = 'frontend';
  // color: TButtonColor = 'secondary';
  // padding: TButtonPadding = 'xl';
  // inputText: string = '';
  // onMessageSent(message: string) {
  //   console.log('Сообщение от чата:', message);
  // }
}
