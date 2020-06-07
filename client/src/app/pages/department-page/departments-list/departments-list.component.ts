import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { Departments } from '../../../reducers/department/department.model';
import { Observable } from 'rxjs';
import { DbApiService } from '../../../shared/services/db-api.service';
import { loadEmployees } from '../../../reducers/employee/employee.action';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {

  departmentState$: Observable<Departments>;

  constructor(
    private db: DbApiService,
    private  store: Store<State>
  ) { }

  ngOnInit(): void {
    this.db.fetchEmployees().subscribe((data) => {
      this.store.dispatch(loadEmployees(data));
    });

    this.departmentState$ = this.store.select('departments');

  }

}
