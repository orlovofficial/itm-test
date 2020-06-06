import { Department } from './department.model';
import { createAction, props } from '@ngrx/store';

export const loadDepartments = createAction(
  '[Department] Load',
  props<{ data: Array<Department> }>()
);

export const addDepartment = createAction(
  '[Department] Add',
  props<Department>()
);

export const deleteDepartment = createAction(
  '[Department] Delete',
  props<{ id: number }>()
);

export const updateDepartment = createAction(
  '[Department] Update',
  props<Department>()
);
