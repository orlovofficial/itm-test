import { Component, OnInit } from '@angular/core';
import { DbApiService } from '../../shared/services/db-api.service';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { loadEmployees } from '../../reducers/employee/employee.action';
import { loadDepartments } from '../../reducers/department/department.action';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  constructor(
    private db: DbApiService,
    private  store: Store<State>
  ) { }

  ngOnInit(): void {
    this.db.fetchEmployees().subscribe((data) => {
      this.store.dispatch(loadEmployees(data));
    });

    this.db.fetchDepartments().subscribe((data) => {
      this.store.dispatch(loadDepartments(data));
    });
  }

}
