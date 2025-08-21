import { useState } from 'react';
import { toast } from 'sonner';
import { Category } from '../../types/category';

interface CreateCategoryRequest {
  category: Category;
}

interface CreateCategoryResponse {
  message: string;
}

export default function useCreateCategory() {
  const [createCategoryDialogOpen, setCreateCategoryDialogOpen] =
    useState(false);

  const handleCreateCategory = (data: unknown) => {
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
