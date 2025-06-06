'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const transactionData = [
  { month: 'Jan', income: 4000, expense: 2400 },
  { month: 'Feb', income: 3000, expense: 1398 },
  { month: 'Mar', income: 2000, expense: 3800 },
  { month: 'Apr', income: 2780, expense: 3908 },
  { month: 'May', income: 1890, expense: 4800 },
  { month: 'Jun', income: 2390, expense: 3800 },
  { month: 'Jul', income: 2390, expense: 3800 },
  { month: 'Aug', income: 2390, expense: 3800 },
  { month: 'Sep', income: 2390, expense: 3800 },
  { month: 'Oct', income: 2390, expense: 3800 },
  { month: 'Nov', income: 2390, expense: 3800 },
  { month: 'Dec', income: 2390, expense: 3800 },
];

export default function TransactionsBarGraph() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-xl">Income vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            income: {
              label: 'Income',
              color: 'hsl(var(--chart-1))',
            },
            expense: {
              label: 'Expense',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="h-[240px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={transactionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={value => `$${value}`} width={60} />
              <ChartTooltip
                content={
                  <ChartTooltipContent formatter={value => `$${value}`} />
                }
              />
              <Bar
                dataKey="income"
                fill="var(--color-income)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="expense"
                fill="var(--color-expense)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
