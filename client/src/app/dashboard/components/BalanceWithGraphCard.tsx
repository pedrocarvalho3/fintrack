import BalanceCard from './BalanceCard';
import BalanceChart from './BalanceChart';

export default function BalanceWithGraphCard() {
  return (
    <div className="row-span-2 space-y-8 rounded-2xl border p-6">
      <BalanceCard />
      <BalanceChart />
    </div>
  );
}
