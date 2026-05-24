import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumn } from '../models/table.model';

@Component({
  imports: [CommonModule],
  selector: 'component-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  public items = input<any>([]);
  public columns = input<TableColumn[]>([]);

  constructor(public router: Router) {}
}
