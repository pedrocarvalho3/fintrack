import BalanceWithGraphCard from './BalanceWithGraphCard';
import ExpenseCard from './ExpenseCard';
import IncomeCard from './IncomeCard';

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3">
      <IncomeCard />
      <ExpenseCard />
      <BalanceWithGraphCard />
    </div>
  );
}
