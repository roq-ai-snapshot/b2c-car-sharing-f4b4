import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
}
