import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employe } from '../../models/employe/employe.model';
import { EmployeService } from '../../services/employe/employe.service';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css',
})
export class EmployeComponent implements OnInit {
  employes: Employe[] = [];

  constructor(
    private employeService: EmployeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEmployes();
  }

  loadEmployes(): void {
    this.employeService.getAllEmployes().subscribe({
      next: (res) => {
        this.employes = res.data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching employes:', err);
      }
    });
  }
}
