import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'feature-machines',
  templateUrl: './machines.component.html',
})
export class MachinesComponent {
  constructor(public router: Router) {}
}
