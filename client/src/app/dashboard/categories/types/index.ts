export enum CategoryType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export interface Category {
  id: number;
  name: string;
  transactionCount: number;
  status: string;
  icon: string;
  type: CategoryType;
}
