import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  isNew = true;
  form: FormGroup

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      departmentId: new FormControl(null, Validators.required)
    });

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.isNew = false;
      }
    });
  }

}
