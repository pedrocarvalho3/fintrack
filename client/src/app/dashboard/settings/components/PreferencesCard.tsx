'use client';

import { ThemeToggle } from '@/components/blocks/ThemeToggle';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCurrency, type SupportedCurrency } from '@/hooks/use-currency';

export default function PreferencesCard() {
  const { currency, setCurrency, currencies } = useCurrency();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>
          Make changes to your preferences here. Click save when you&apos;re
          done.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-end justify-between border-b pb-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Theme</h3>
            <p className="text-sm text-muted-foreground">
              Change the theme of the app to your liking.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Currency</h3>
            <p className="text-sm text-muted-foreground">
              Change the currency of the app to your liking.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select
              value={currency}
              onValueChange={(value: SupportedCurrency) => setCurrency(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(curr => (
                  <SelectItem key={curr.value} value={curr.value}>
                    {curr.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
