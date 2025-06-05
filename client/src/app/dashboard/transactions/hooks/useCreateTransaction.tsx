import { useState } from 'react';
import { toast } from 'sonner';

export default function useCreateTransaction() {
  const [createTransactionDialogOpen, setCreateTransactionDialogOpen] =
    useState(false);

  const handleCreateTransaction = () => {
    console.log('create transaction');
    toast.success('Transaction created successfully', {
      description: 'The transaction has been created successfully.',
      duration: 3000,
      position: 'top-right',
    });
    setCreateTransactionDialogOpen(false);
  };

  return {
    createTransactionDialogOpen,
    setCreateTransactionDialogOpen,
    handleCreateTransaction,
  };
}
