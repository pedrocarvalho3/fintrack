import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDownToLineIcon, Ellipsis, TrendingUp } from 'lucide-react';

export default function BalanceCard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-full border-2 p-2">
            <ArrowDownToLineIcon className="h-4 w-4 text-gray-600" />{' '}
          </div>
          <h3 className="text-xl">My Balance</h3>
        </div>
        <div>
          <Button variant="ghost">
            <Ellipsis className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <h2 className="text-2xl font-bold">$10,000.00</h2>
        <Badge
          variant="outline"
          className="rounded-full border-none bg-green-100 text-green-700"
        >
          22.5% <TrendingUp className="ml-2 h-4 w-4" />
        </Badge>
      </div>
      <div>
        <p className="text-gray-500">
          You made an extra <span className="text-green-700">$2,863.00</span>{' '}
          this months
        </p>
      </div>
    </div>
  );
}
