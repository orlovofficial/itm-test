import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../reducers/department/department.model';

@Injectable({
  providedIn: 'root'
})
export class DbApiService {

  constructor(private http: HttpClient) { }

  fetchDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('/api/department');
  }

  createDepartments(department: Department): Observable<Department> {
    return this.http.post<Department>('/api/department', department);
  }
}
