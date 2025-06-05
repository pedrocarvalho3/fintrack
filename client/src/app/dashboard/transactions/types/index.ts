import { Category } from '../../categories/types';

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: Category;
  status: TransactionStatus;
}
