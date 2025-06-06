import { Card, CardContent } from '@/components/ui/card';
import BalanceCard from './BalanceCard';
import BalanceChart from './BalanceChart';

export default function BalanceWithGraphCard() {
  return (
    <div className="row-span-2">
      <Card className="h-full">
        <CardContent className="p-6">
          <BalanceCard />
          <BalanceChart />
        </CardContent>
      </Card>
    </div>
  );
}
