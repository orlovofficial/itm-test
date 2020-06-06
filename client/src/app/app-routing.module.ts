import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyLayoutComponent } from './shared/layouts/company-layout/company-layout.component';

import { DepartmentPageComponent } from './pages/department-page/department-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';

import { DepartmentsListComponent } from './pages/department-page/departments-list/departments-list.component';
import { DepartmentDetailComponent } from './pages/department-page/department-detail/department-detail.component';
import { DepartmentFormComponent } from './pages/department-page/department-form/department-form.component';
import { EmployeesListComponent } from './pages/employee-page/employees-list/employees-list.component';
import { EmployeeDetailComponent } from './pages/employee-page/employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './pages/employee-page/employee-form/employee-form.component';


const routes: Routes = [
  {
    path: '',
    component: CompanyLayoutComponent,
    children: [
      { path: '', redirectTo: '/department', pathMatch: 'full' },
      { path: 'department', component: DepartmentPageComponent, children: [
          { path: '', component: DepartmentsListComponent },
          { path: 'new', component: DepartmentFormComponent },
          { path: ':id', component: DepartmentDetailComponent },
          { path: ':id/edit', component: DepartmentFormComponent }
        ] },
      { path: 'employee', component: EmployeePageComponent, children: [
          { path: '', component: EmployeesListComponent },
          { path: ':id', component: EmployeeDetailComponent },
          { path: 'new', component: EmployeeFormComponent },
          { path: ':id/edit', component: EmployeeFormComponent }
        ] },
      { path: '**',   redirectTo: '/department', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
