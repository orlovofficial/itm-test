import { ActionReducerMap } from '@ngrx/store';
import { Departments } from './department/department.model';
import { Employees } from './employee/employee.model';
import * as departments from './department/department.reducer';
import * as employees from './employee/employee.reducer';

export interface State {
  departments: Departments,
  employees: Employees
}

export const reducers: ActionReducerMap<State> = {
  departments: departments.departmentReducer,
  employees: employees.employeeReducer
};

