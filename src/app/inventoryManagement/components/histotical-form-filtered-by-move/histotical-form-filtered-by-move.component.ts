import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HistoticalTableComponent } from '../histotical-table/histotical-table.component';

@Component({
  selector: 'app-histotical-form-filtered-by-move',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule, HistoticalTableComponent],
  templateUrl: './histotical-form-filtered-by-move.component.html',
  styleUrl: './histotical-form-filtered-by-move.component.css',
})
export class HistoticalFormFilteredByMoveComponent {
  move = new FormControl('1');
}
