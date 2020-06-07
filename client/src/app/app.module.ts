import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './reducers';

import { CompanyLayoutComponent } from './shared/layouts/company-layout/company-layout.component';

import { DepartmentPageComponent } from './pages/department-page/department-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { DepartmentsListComponent } from './pages/department-page/departments-list/departments-list.component';
import { DepartmentDetailComponent } from './pages/department-page/department-detail/department-detail.component';
import { DepartmentFormComponent } from './pages/department-page/department-form/department-form.component';
import { EmployeesListComponent } from './pages/employee-page/employees-list/employees-list.component';
import { EmployeeDetailComponent } from './pages/employee-page/employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './pages/employee-page/employee-form/employee-form.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CompanyLayoutComponent,
    DepartmentPageComponent,
    EmployeePageComponent,
    DepartmentsListComponent,
    DepartmentDetailComponent,
    DepartmentFormComponent,
    EmployeesListComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
