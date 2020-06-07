import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbApiService } from '../../../shared/services/db-api.service';
import { select, Store } from '@ngrx/store';
import { selectDepartmentById, State } from '../../../reducers';
import { addDepartment, updateDepartment } from '../../../reducers/department/department.action';
import { Department } from '../../../reducers/department/department.model';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  isNew = true;
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private db:DbApiService,
    private store: Store<State>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      departmentId: new FormControl(null)
    });

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.isNew = false;
        this.store.pipe(
          select(selectDepartmentById, {id: +params['id']})
        ).subscribe((department: Department) => {
          this.form.patchValue({
            name: department.name,
            description: department.description,
            departmentId: department.departmentId
          })

        });
      }
    });
  }

  onSubmit() {
    this.form.disable();

    if (this.isNew) {
      this.db.createDepartment({name: this.form.value.name, description: this.form.value.description})
        .subscribe((data) => {
          this.store.dispatch(addDepartment(data));
          this.form.reset({});
          this.form.enable();
          this.router.navigate(['../']);
        });
    } else {
      this.db.updateDepartment(this.form.value).subscribe((data) => {
        this.store.dispatch(updateDepartment(this.form.value));
        this.form.enable();
      })
    }
  }

  onCancel() {
    if(!this.isNew) {
      this.router.navigate(['/department', this.form.value.departmentId]);
    } else {
      this.router.navigate(['/department']);
    }
  }





}
