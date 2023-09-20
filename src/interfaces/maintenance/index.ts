import { GetQueryInterface } from 'interfaces';

export interface MaintenanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MaintenanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
