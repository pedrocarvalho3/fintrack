import { useState } from 'react';
import { toast } from 'sonner';

export default function useUpdateCategory(id: number | null) {
  const [updateCategoryDialogOpen, setUpdateCategoryDialogOpen] =
    useState(false);

  const handleUpdateCategory = () => {
    if (!id) return;

    console.log('updated category', id);
    toast.success('Category updated successfully', {
      description: 'The category has been updated successfully.',
      duration: 3000,
      position: 'top-right',
    });
    setUpdateCategoryDialogOpen(false);
  };

  return {
    updateCategoryDialogOpen,
    setUpdateCategoryDialogOpen,
    handleUpdateCategory,
  };
}
