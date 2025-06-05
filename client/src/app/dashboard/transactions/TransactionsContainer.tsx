'use client';

import Title from '@/components/blocks/Title';
import TopBar from './components/TopBar';
import { TransactionProvider } from './context/TransactionContext';
import CreateTransactionDialog from './components/CreateTransactionDialog';
import UpdateTransactionDialog from './components/UpdateTransactionDialog';
import DeleteTransactionDialog from './components/DeleteTransactionDialog';

export default function TransactionsContainer() {
  return (
    <TransactionProvider>
      <div className="space-y-6">
        <Title>Transactions</Title>
        <TopBar
          searchTerm=""
          handleSearch={() => {}}
          handleRefresh={() => {}}
        />
        <CreateTransactionDialog />
        <UpdateTransactionDialog />
        <DeleteTransactionDialog label="transaction" />
      </div>
    </TransactionProvider>
  );
}
