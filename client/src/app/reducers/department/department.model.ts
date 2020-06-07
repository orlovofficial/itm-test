export interface Department {
  id?: number;
  name: string;
  description: string;
}

export interface Departments {
  departments: Array<Department>;
}
