import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmplyoeeListComponent } from './components/emplyoee-list/emplyoee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddEmployeeComponent,EmplyoeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_1';
}
