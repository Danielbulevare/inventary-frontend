import { Component } from '@angular/core';
import { HistoticalFormFilteredByMoveComponent } from '../../components/histotical-form-filtered-by-move/histotical-form-filtered-by-move.component';

@Component({
  selector: 'app-historical',
  standalone: true,
  imports: [HistoticalFormFilteredByMoveComponent],
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.css',
})
export default class HistoricalComponent {}
