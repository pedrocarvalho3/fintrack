import { Category } from '../../categories/types';

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface Transaction {
  id: number;
  name: string;
  description: string;
  category: Category;
  amount: number;
  date: Date;
  status: TransactionStatus;
}
