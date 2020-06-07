import { ActionReducerMap, createSelector } from '@ngrx/store';
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

const selectDepartments = (state: State) => state.departments;
const selectEmployees = (state: State) => state.employees;

export const selectDepartmentById = createSelector(
  selectDepartments,
  (state: Departments, props) => (state.departments.find((department) => (department.departmentId === props.id)))
);

export const selectEmployeeById = createSelector(
  selectEmployees,
  (state: Employees, props) => (state.employees.find((employee) => (employee.employeeId === props.id)))
);
