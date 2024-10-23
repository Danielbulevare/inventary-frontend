import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterModule, MatCardModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  @Input() nameElement: string = '';
  @Input() imgPath: string = '';
  @Input() link: string = '';
}
