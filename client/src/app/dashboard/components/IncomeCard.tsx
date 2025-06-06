import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Ellipsis, TrendingUp, WalletIcon } from 'lucide-react';

export default function IncomeCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full border-2 p-2">
              <WalletIcon className="h-4 w-4 text-gray-600" />
            </div>
            <h3 className="text-xl">Income</h3>
          </div>
          <div>
            <Button variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <h2 className="text-2xl font-bold">$8,350.00</h2>
          <Badge
            variant="outline"
            className="rounded-full border-none bg-green-100 text-green-700"
          >
            12.5% <TrendingUp className="ml-2 h-4 w-4" />
          </Badge>
        </div>
        <div className="mt-2">
          <p className="text-gray-500">
            You made an extra <span className="text-green-700">$1,200.00</span>{' '}
            this month
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
