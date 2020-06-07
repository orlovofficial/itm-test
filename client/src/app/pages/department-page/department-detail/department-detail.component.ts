import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../../reducers/department/department.model';
import { select, Store } from '@ngrx/store';
import { selectDepartmentById, State } from '../../../reducers';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DbApiService } from '../../../shared/services/db-api.service';
import { deleteDepartment } from '../../../reducers/department/department.action';
import { filterEmployee } from '../../../reducers/employee/employee.action';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {

  department$: Observable<Department>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private db:DbApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.department$ = this.store.pipe(select(selectDepartmentById, {id: +params['id']}));
      this.store.dispatch(filterEmployee({id: +params['id']}));
    });

  }

  onDelete(id: number) {
    this.db.deleteDepartment(id).subscribe(() => {
      this.store.dispatch(deleteDepartment({id}));
    });
    this.router.navigate(['/department']);
  }
}
