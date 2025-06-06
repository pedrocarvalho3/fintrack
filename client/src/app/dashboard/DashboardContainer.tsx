'use client';

import Title from '@/components/blocks/Title';
import DashboardGrid from './components/DashboardGrid';
import { TransactionStatus } from './transactions/types';
import { mockCategories } from '@/mocks/mock-categories';
import TransactionsPreview from './components/TransactionsPreview';

export default function DashboardContainer() {
  const transactions = [
    {
      id: 1,
      name: 'MacBook Pro',
      description: 'Purchased new MacBook Pro for work',
      category: mockCategories[0],
      amount: -2500,
      date: new Date('2024-05-05'),
      status: TransactionStatus.COMPLETED,
    },
    {
      id: 2,
      name: 'Summer T-shirts',
      description: 'Bought new T-shirts for summer',
      category: mockCategories[1],
      amount: -120,
      date: new Date('2024-05-10'),
      status: TransactionStatus.COMPLETED,
    },
  ];

  return (
    <div className="space-y-6">
      <Title>System Overview</Title>
      <DashboardGrid />
      <TransactionsPreview transactions={transactions} />
    </div>
  );
}
