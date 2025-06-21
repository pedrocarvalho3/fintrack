export enum CategoryType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export enum StatusType {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface Category {
  id: number;
  name: string;
  transactionCount: number;
  status: StatusType;
  icon: string;
  color: string;
  type: CategoryType;
}
