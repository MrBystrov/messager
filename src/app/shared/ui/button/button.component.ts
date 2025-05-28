import { Component, HostBinding, input } from '@angular/core';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type TButtonColor = 'main' | 'secondary' | 'danger';
export type TButtonPadding = 's' | 'm' | 'l' | 'xl';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  color = input<TButtonColor>('main')
  paddingClass = input<TButtonPadding>('m')
}
