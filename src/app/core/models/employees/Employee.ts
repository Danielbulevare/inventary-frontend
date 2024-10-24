import { Status } from '../estatus/status';
import { Role } from '../roles/Role';

export class Employee {
  id: Number = 0;
  name: string = '';
  mail: string = '';
  password: string = '';
  status: Status = { id: 0, status: '' };
  role: Role = { id: 0, role: '' };
}
