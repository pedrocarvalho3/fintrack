import { useState } from 'react';
import { toast } from 'sonner';

export default function useUpdateTransaction(id: number | null) {
  const [updateTransactionDialogOpen, setUpdateTransactionDialogOpen] =
    useState(false);

  const handleUpdateTransaction = () => {
    if (!id) return;

    console.log('updated transaction', id);
    toast.success('Transaction updated successfully', {
      description: 'The transaction has been updated successfully.',
      duration: 3000,
      position: 'top-right',
    });
    setUpdateTransactionDialogOpen(false);
  };

  return {
    updateTransactionDialogOpen,
    setUpdateTransactionDialogOpen,
    handleUpdateTransaction,
  };
}
