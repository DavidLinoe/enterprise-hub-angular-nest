import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MachinesApi } from '../apis/machines.api';
import { Machine } from '../models/machines.model';

@Injectable()
export class MachinesFacade {
  public machines$: BehaviorSubject<Machine[]> = new BehaviorSubject<Machine[]>([]);

  constructor(private machinesApi: MachinesApi) {}

  getAllMachines(): void {
    this.machinesApi.getAllMachines().subscribe((response) => {
      if (response.data) {
        this.machines$.next(response.data);
      }
    });
  }

  createMachine(machine: Partial<Machine>): void {
    this.machinesApi.createMachine(machine).subscribe(() => {
      this.getAllMachines();
    });
  }

  updateMachine(id: string, machine: Partial<Machine>): void {
    this.machinesApi.updateMachine(id, machine).subscribe(() => {
      this.getAllMachines();
    });
  }

  deleteMachine(id: string): void {
    this.machinesApi.deleteMachine(id).subscribe(() => {
      this.getAllMachines();
    });
  }
}
