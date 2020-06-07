import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectEmployeeById, State } from '../../../reducers';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DbApiService } from '../../../shared/services/db-api.service';
import { Observable } from 'rxjs';
import { Employee } from '../../../reducers/employee/employee.model';
import { deleteDepartment } from '../../../reducers/department/department.action';
import { deleteEmployee } from '../../../reducers/employee/employee.action';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee$: Observable<Employee>

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private db:DbApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.employee$ = this.store.pipe(select(selectEmployeeById, {id: +params['id']}));
    });
  }

  onDelete(id: number) {
    this.db.deleteEmployee(id).subscribe(() => {
      this.store.dispatch(deleteEmployee({id}));
    });
    this.router.navigate(['/employee']);
  }

}
