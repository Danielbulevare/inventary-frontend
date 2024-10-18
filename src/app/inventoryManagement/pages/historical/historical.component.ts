import { Component } from '@angular/core';
import { HistoticalFormFilteredByMoveComponent } from '../../components/histotical-form-filtered-by-move/histotical-form-filtered-by-move.component';
import { HistoticalTableComponent } from '../../components/histotical-table/histotical-table.component';

@Component({
  selector: 'app-historical',
  standalone: true,
  imports: [HistoticalFormFilteredByMoveComponent, HistoticalTableComponent],
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.css',
})
export default class HistoricalComponent {}
