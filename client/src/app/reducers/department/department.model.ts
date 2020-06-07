export interface Department {
  departmentId?: number;
  name: string;
  description: string;
}

export interface Departments {
  departments: Array<Department>;
}
