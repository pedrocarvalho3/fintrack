'use client';

import Title from '@/components/blocks/Title';
import TopBar from './components/TopBar';
import { TransactionProvider } from './context/TransactionContext';
import CreateTransactionDialog from './components/CreateTransactionDialog';
import UpdateTransactionDialog from './components/UpdateTransactionDialog';
import DeleteTransactionDialog from './components/DeleteTransactionDialog';
import TransactionTable from './components/TransactionTable';
import { useTransactions } from './hooks/useTransactions';
import { useState } from 'react';
import Pagination from '@/components/blocks/Pagination';
import { Toaster } from 'sonner';

export default function TransactionsContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const { transactions } = useTransactions(currentPage, 10);

  return (
    <TransactionProvider>
      <div className="space-y-6">
        <Title>Transactions</Title>
        <TopBar
          searchTerm=""
          handleSearch={() => {}}
          handleRefresh={() => {}}
        />
        <TransactionTable transactions={transactions} />
        <Pagination
          totalPages={10}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <CreateTransactionDialog />
        <UpdateTransactionDialog />
        <DeleteTransactionDialog label="transaction" />
        <Toaster />
      </div>
    </TransactionProvider>
  );
}
