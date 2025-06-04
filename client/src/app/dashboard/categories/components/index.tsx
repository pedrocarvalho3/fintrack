'use client';

import Title from '@/components/blocks/Title';
import TopBar from './TopBar';
import CategoryGrid from './CategoryGrid';
import Pagination from '@/components/blocks/Pagination';
import { useCategories } from '../hooks/useCategories';
import { useState } from 'react';
import DeleteConfirmDialog from '@/components/blocks/DeleteConfirmDialog';
import useDeleteCategory from '../hooks/useDeleteCategory';
import { Toaster } from 'sonner';
import useCreateCategory from '../hooks/useCreateCategory';
import CreateCategoryDialog from './CreateCategoryDialog';

export default function CategoriesContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const { categories } = useCategories(currentPage, 9);
  const { deleteDialogOpen, setDeleteDialogOpen, handleDeleteConfirm } =
    useDeleteCategory(categoryId);
  const {
    createCategoryDialogOpen,
    setCreateCategoryDialogOpen,
    handleCreateCategory,
  } = useCreateCategory();

  return (
    <div className="space-y-6">
      <Title>Categories</Title>
      <TopBar
        searchTerm=""
        handleSearch={() => {}}
        handleRefresh={() => {}}
        setCreateCategoryDialogOpen={setCreateCategoryDialogOpen}
      />
      <CategoryGrid
        categories={categories}
        setDeleteDialogOpen={setDeleteDialogOpen}
        setCategoryId={setCategoryId}
      />
      <Pagination
        totalPages={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <CreateCategoryDialog
        createCategoryDialogOpen={createCategoryDialogOpen}
        setCreateCategoryDialogOpen={setCreateCategoryDialogOpen}
        handleCreateCategory={handleCreateCategory}
      />
      <DeleteConfirmDialog
        label="category"
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        handleDeleteConfirm={handleDeleteConfirm}
      />
      <Toaster />
    </div>
  );
}
