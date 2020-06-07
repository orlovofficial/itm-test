import { Employee, Employees } from './employee.model';
import { addEmployee, deleteEmployee, filterEmployee, loadEmployees, updateEmployee } from './employee.action';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: Employees = {
  employees: []
};

const _employeeReducer = createReducer(initialState,
  on(loadEmployees, (state: Employees, {data}) => ({
    ...state,
    employees: data
  })),
  on(addEmployee, (state: Employees, employee: Employee) => ({
    ...state,
    employees: [...state.employees, employee]
  })),
  on(deleteEmployee, (state: Employees, {id}) => ({
    ...state,
    employees: state.employees.filter((item) => (item.employeeId !== id))
  })),
  on(updateEmployee, (state: Employees, employee: Employee) => ({
    ...state,
    employees: state.employees.map((item) => (item.employeeId === employee.employeeId ? employee : item))
  })),
  on(filterEmployee, (state: Employees, {id}) => ({
    ...state,
    employees: state.employees.filter((item) => (item.departmentId == id))
  }))
);

export function employeeReducer(state: Employees | undefined, action: Action) {
  return _employeeReducer(state, action);
}
