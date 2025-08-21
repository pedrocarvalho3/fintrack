'use client';

import Title from '@/components/blocks/Title';
import TopBar from '@/components/categories/TopBar';
import CategoryGrid from '@/components/categories/CategoryGrid';
import Pagination from '@/components/blocks/Pagination';
import { useCategories } from '../../../hooks/categories/useCategories';
import { useState } from 'react';
import DeleteCategoryDialog from '@/components/categories/DeleteCategoryDialog';
import { Toaster } from 'sonner';
import { CategoryDialog } from '@/components/categories/CategoryDialog';
import { CategoryProvider } from '@/context/CategoryContext';
import { useCategoryDialog } from '../../../hooks/categories/useCategoryDialog';

export default function CategoriesContainer() {
  const [currentPage, setCurrentPage] = useState(1);

  const getCategories = {
    page: currentPage,
    limit: 9,
  };

  const { data, isLoading, isError } = useCategories(getCategories);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Erro ao carregar categorias</div>;

  return (
    <CategoryProvider>
      <div className="space-y-6">
        <Title>Categories</Title>
        <TopBar
          searchTerm=""
          handleSearch={() => {}}
          handleRefresh={() => {}}
        />
        <CategoryGrid categories={data?.data || []} />
        <Pagination
          totalPages={data?.totalPages || 1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <CategoryDialog />
        <DeleteCategoryDialog label="category" />
        <Toaster />
      </div>
    </CategoryProvider>
  );
}
