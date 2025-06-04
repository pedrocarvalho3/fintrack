import { useState } from 'react';
import { toast } from 'sonner';

export default function useEditCategory(id: number | null) {
  const [editCategoryDialogOpen, setEditCategoryDialogOpen] = useState(false);

  const handleEditCategory = () => {
    if (!id) return;

    console.log('edit category', id);
    toast.success('Category edited successfully', {
      description: 'The category has been edited successfully.',
      duration: 3000,
      position: 'top-right',
    });
    setEditCategoryDialogOpen(false);
  };

  return {
    editCategoryDialogOpen,
    setEditCategoryDialogOpen,
    handleEditCategory,
  };
}
