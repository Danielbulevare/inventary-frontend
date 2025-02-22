import { Component } from '@angular/core';
import { StockFormFilteredByStatusComponent } from '../../components/stock-form-filtered-by-status/stock-form-filtered-by-status.component';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [StockFormFilteredByStatusComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css',
})
export default class StockComponent {}
