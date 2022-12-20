export interface Employee {
  first_name: string;
  last_name: string;
  contact_number: string;
  id: number;
  image: string;
  org_id: string;
  date_of_joining: string;
}
export interface Education {
  program: string;
  institute: string;
  year: string;
}
export interface Experience {
  title: string;
  company: string;
  start_date: string;
  end_date: string;
}
export type Benefit = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};
export interface EmployeeData {
  id: number;
  user: {
    first_name: string;
    last_name: string;
    email: string;
    image: string;
    contact_number: string;
  };
  total_experience: string;
  benefits: Benefit[];
  experience: Experience[];
  degrees: Education[];
  contact_number: string;
  date_of_joining: string;
  nic: string;
  designation: string;
  emergency_contact_number: string;
  organization: number;
  type: number;
  manager?: number;
  department: number;
  org_id: string;
}
export interface Doc {
  id: number;
  name: string;
  type: string;
  document_url: string;
}
export interface EmployeeDoc {
  type: string;
  docs: Doc[];
}

interface AllowedModules {
  member_modules: string[];
  admin_modules: string[];
  owner_modules: string[];
}
export interface User {
  image: string;
  email: string;
  first_name: string;
  headline: string;
  is_superuser: boolean;
  last_name: string;
  organization: string;
  allowed_modules: AllowedModules;
}
export interface Flags {
  show_users_module: string;
  show_employees_module: string;
  show_payroll_module: string;
  show_accounts_module: string;
  show_dashboard_module: boolean;
  show_setting_module: string;
}
export interface EmployeementTypes {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export interface CompaniesTypes {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}
export interface ProgramsTypes {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export interface InstituteTypes {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}
export interface roleTypes {
  id: number;
  name: string;
  permission: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}
export interface departmentsTypes {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export interface Benefits {
  id: number;
  name: string;
  created_at: string;
}
