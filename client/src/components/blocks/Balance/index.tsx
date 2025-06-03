import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useBalance } from './hooks/useBalance';

export function Balance() {
  const { balance, showBalance, toggleBalance } = useBalance();

  return (
    <div className="flex w-28 items-center gap-2">
      <p className="min-w-16 text-sm text-muted-foreground">
        $ <span>{showBalance ? balance.toFixed(2) : '********'}</span>
      </p>
      <Button variant="ghost" size="icon" onClick={toggleBalance}>
        {showBalance ? (
          <Eye className="h-4 w-4" />
        ) : (
          <EyeOff className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
