import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../reducers/department/department.model';
import { Employee } from '../../reducers/employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DbApiService {

  constructor(private http: HttpClient) { }

  // Department

  fetchDepartments(): Observable<{ data: Department[] }> {
    return this.http.get<{ data: Department[] }>('/api/department');
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>('/api/department', department);
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete<any>(`/api/department/${id}`);
  }

  updateDepartment(department: Department): Observable<any> {
    return this.http.patch(`/api/department/${department.departmentId}`, department);
  }

  // Employee

  fetchEmployees(): Observable<{ data: Employee[] }> {
    return this.http.get<{ data: Employee[] }>('/api/employee');
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('/api/employee', employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`/api/employee/${id}`);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.patch(`/api/employee/${employee.employeeId}`, employee);
  }
}
