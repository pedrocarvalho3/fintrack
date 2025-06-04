import { useState } from 'react';
import { toast } from 'sonner';

export default function useCreateCategory() {
  const [createCategoryDialogOpen, setCreateCategoryDialogOpen] =
    useState(false);

  const handleCreateCategory = () => {
    console.log('create category');
    toast.success('Category created successfully', {
      description: 'The category has been created successfully.',
      duration: 3000,
      position: 'top-right',
    });
    setCreateCategoryDialogOpen(false);
  };

  return {
    createCategoryDialogOpen,
    setCreateCategoryDialogOpen,
    handleCreateCategory,
  };
}
