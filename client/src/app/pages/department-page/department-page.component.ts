import { Component, OnInit } from '@angular/core';
import { DbApiService } from '../../shared/services/db-api.service';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { loadDepartments } from '../../reducers/department/department.action';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.scss']
})
export class DepartmentPageComponent implements OnInit {

  constructor(
    private db: DbApiService,
    private  store: Store<State>
  ) { }

  ngOnInit(): void {
    this.db.fetchDepartments().subscribe((data) => {
      this.store.dispatch(loadDepartments(data));
    });
  }

}
