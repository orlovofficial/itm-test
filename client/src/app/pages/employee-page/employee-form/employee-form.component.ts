import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DbApiService } from '../../../shared/services/db-api.service';
import { select, Store } from '@ngrx/store';
import { selectEmployeeById, State } from '../../../reducers';
import { Employee } from '../../../reducers/employee/employee.model';
import { addEmployee, updateEmployee } from '../../../reducers/employee/employee.action';
import { Observable } from 'rxjs';
import { Departments } from '../../../reducers/department/department.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  departmentsState$: Observable<Departments>
  isNew = true;
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private db:DbApiService,
    private store: Store<State>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentsState$ = this.store.select('departments');


    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      departmentId: new FormControl(null, Validators.required),
      employeeId: new FormControl(null)
    });

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.isNew = false;
        this.store.pipe(select(selectEmployeeById, {id: +params['id']})).subscribe((employee: Employee) => {
          this.form.patchValue({
            firstName: employee.firstName,
            lastName: employee.lastName,
            departmentId: employee.departmentId.toString(),
            employeeId: +employee.employeeId
          })
        });
      }
    });

  }


  onSubmit() {
    this.form.disable();

    if (this.isNew) {
      this.db.createEmployee({
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        departmentId: +this.form.value.departmentId
      }).subscribe((data) => {
          this.store.dispatch(addEmployee(data));
          this.form.reset({});
          this.form.enable();
          this.router.navigate(['/employee']);
        });
    } else {
      this.db.updateEmployee(this.form.value).subscribe((data) => {
        this.store.dispatch(updateEmployee(this.form.value));
        this.form.enable();
      })
    }
  }

  onCancel() {
    if(!this.isNew) {
      this.router.navigate(['/employee', this.form.value.employeeId]);
    } else {
      this.router.navigate(['/employee']);
    }
  }

}
