'use client';

import BalanceWithGraphCard from './BalanceWithGraphCard';
import ExpenseCard from './ExpenseCard';
import IncomeCard from './IncomeCard';
import TransactionsBarGraph from './TransactionsBarGraph';

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <IncomeCard />
      <ExpenseCard />
      <BalanceWithGraphCard />
      <TransactionsBarGraph />
    </div>
  );
}
