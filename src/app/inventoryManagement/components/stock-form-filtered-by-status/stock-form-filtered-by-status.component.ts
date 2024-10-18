import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-stock-form-filtered-by-status',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule],
  templateUrl: './stock-form-filtered-by-status.component.html',
  styleUrl: './stock-form-filtered-by-status.component.css',
})
export class StockFormFilteredByStatusComponent {
  status = new FormControl('1');
}
