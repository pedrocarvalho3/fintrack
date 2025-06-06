import IncomeCard from './IncomeCard';

export default function DashboardGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <IncomeCard />
    </div>
  );
}
