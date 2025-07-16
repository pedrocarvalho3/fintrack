export enum CategoryType {
  INCOME = 0,
  EXPENSE = 1,
}

export enum StatusType {
  ACTIVE = 1,
  INACTIVE = 0,
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
