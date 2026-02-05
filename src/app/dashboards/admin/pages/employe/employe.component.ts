import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employe } from '../../models/employe/employe.model';
import { EmployeService } from '../../services/employe/employe.service';
import { CommonModule } from '@angular/common';
import { CreateEmployeRequest } from '../../models/employe/create-employe-request.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css',
})
export class EmployeComponent implements OnInit {
  employes: Employe[] = [];
  newEmploye: CreateEmployeRequest = { nom: '', email: '', motDePasse: '' };

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
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching employes:', err);
      },
    });
  }

  createEmploye() {
    this.employeService.createEmploye(this.newEmploye).subscribe({
      next: (response) => {
        console.log('employé crée: ', response.data);
        this.newEmploye={nom: '', email: '', motDePasse: ''};
        this.loadEmployes();
         const closeBtn= document.getElementById('btnCloseModal');
        closeBtn?.click();
      },
    });
  }
}
