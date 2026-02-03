import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { EmployeService } from '../../services/employe-service';
import { Employe } from '../../models/employe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employes.html',
  styleUrl: './employes.css',
})
export class Employes implements OnInit {
  employes: Employe[] = [];
  // employes = signal<Employe[]>([]);
  msg = '';

  constructor(
    private employeService: EmployeService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadEmployes();
  }

  loadEmployes(): void {
    this.employeService.getAllEmployes().subscribe({
      next: (res) => {
        this.employes = res.data;
        this.msg = res.message;
        this.cdr.detectChanges();
      },
    });
  }
}
