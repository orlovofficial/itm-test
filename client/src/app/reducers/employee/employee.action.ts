import { Employee } from './employee.model';
import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction(
  '[Employee] Load',
  props<{ data: Array<Employee> }>()
);

export const addEmployee = createAction(
  '[Employee] Add',
  props<Employee>()
);

export const deleteEmployee = createAction(
  '[Employee] Delete',
  props<{ id: number }>()
);

export const updateEmployee = createAction(
  '[Employee] Update',
  props<Employee>()
);
