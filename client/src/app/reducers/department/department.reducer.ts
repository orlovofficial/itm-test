import { Department, Departments } from './department.model';
import { addDepartment, deleteDepartment, loadDepartments, updateDepartment } from './department.action';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: Departments = {
  departments: []
};

const _departmentReducer = createReducer(initialState,
  on(loadDepartments, (state: Departments, {data}) => ({
    ...state,
    departments: data
  })),
  on(addDepartment, (state: Departments, department: Department) => ({
    ...state,
    departments: [...state.departments, department]
  })),
  on(deleteDepartment, (state: Departments, {id}) => ({
    ...state,
    departments: state.departments.filter((item) => (item.id !== id))
  })),
  on(updateDepartment, (state: Departments, department: Department) => ({
    ...state,
    departments: state.departments.map((item) => (item.id === department.id ? department : item))
  }))
);

export function departmentReducer(state: Departments | undefined, action: Action) {
  return _departmentReducer(state, action);
}
