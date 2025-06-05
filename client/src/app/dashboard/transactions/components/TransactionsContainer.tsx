'use client';

import Title from '@/components/blocks/Title';
import TopBar from './TopBar';

export default function TransactionsContainer() {
  return (
    <div className="space-y-6">
      <Title>Transactions</Title>
      <TopBar searchTerm="" handleSearch={() => {}} handleRefresh={() => {}} />
    </div>
  );
}
