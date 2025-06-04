import { useState } from 'react';
import { toast } from 'sonner';

export default function useDeleteCategory(id: number | null) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteConfirm = () => {
    if (!id) return;

    console.log('delete', id);
    toast.success('Category deleted successfully', {
      description:
        'This action cannot be undone. This will permanently delete the category and remove all associated data.',
      duration: 3000,
      position: 'top-right',
    });
  };

  return { deleteDialogOpen, setDeleteDialogOpen, handleDeleteConfirm };
}
