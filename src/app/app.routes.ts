import { Routes } from '@angular/router';
import { ChatPage } from './pages/chat/chat.component';
import { SettingsPage } from './pages/settings/settings.component';
import { GroupsPage } from './pages/groups/groups.component';

export const routes: Routes = [
  {
    path: 'chat',
    component: ChatPage,
    data: {
      name: 'Чат',
    },
  },
  {
    path: 'groups',
    component: GroupsPage,
    data: {
      name: 'Группы',
    },
  },
  {
    path: 'settings',
    component: SettingsPage,
    data: {
      name: 'Настройки',
    },
  },
];
