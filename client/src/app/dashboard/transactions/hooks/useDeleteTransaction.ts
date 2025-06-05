import { useState } from 'react';
import { toast } from 'sonner';

export default function useDeleteTransaction(id: number | null) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteConfirm = () => {
    if (!id) return;

    console.log('delete transaction', id);
    toast.success('Transaction deleted successfully', {
      description:
        'This action cannot be undone. This will permanently delete the transaction and remove all associated data.',
      duration: 3000,
      position: 'top-right',
    });
  };

  return { deleteDialogOpen, setDeleteDialogOpen, handleDeleteConfirm };
}
