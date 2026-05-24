import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'feature-companies',
  templateUrl: './companies.component.html',
})
export class CompaniesComponent {
  constructor(public router: Router) {}

}
