'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const data = [
  { name: 'Savings', value: 4000, color: 'hsl(var(--chart-1))' },
  { name: 'Investments', value: 3000, color: 'hsl(var(--chart-2))' },
  { name: 'Expenses', value: 2000, color: 'hsl(var(--chart-3))' },
  { name: 'Income', value: 1000, color: 'hsl(var(--chart-4))' },
];

export default function BalanceChart() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <h4 className="mb-2 font-medium">Balance Distribution</h4>
      <ChartContainer
        config={{
          savings: {
            label: 'Savings',
            color: 'hsl(var(--chart-1))',
          },
          investments: {
            label: 'Investments',
            color: 'hsl(var(--chart-2))',
          },
          expenses: {
            label: 'Expenses',
            color: 'hsl(var(--chart-3))',
          },
          income: {
            label: 'Income',
            color: 'hsl(var(--chart-4))',
          },
        }}
        className="h-[240px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-4 flex flex-row gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
