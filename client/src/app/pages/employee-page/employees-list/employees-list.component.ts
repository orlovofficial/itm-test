import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  @Input() displayedColumns: string[] = [
    'firstName',
    'lastName',
    'departmentId'
  ];
  dataSource;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    this.store.select('employees').subscribe(({employees}) => {

      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.sort = this.sort;
    });


  }

}
