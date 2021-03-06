export interface Employee {
  employeeId?: number;
  firstName: string;
  lastName: string;
  departmentId: number;
}

export interface Employees {
  employees: Array<Employee>;
}
