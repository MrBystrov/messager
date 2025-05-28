import { Component, input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  routes = input<Routes>()
}
