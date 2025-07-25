'use client';

import Title from '@/components/blocks/Title';
import TopBar from './components/TopBar';
import CategoryGrid from './components/CategoryGrid';
import Pagination from '@/components/blocks/Pagination';
import { useCategories } from './hooks/useCategories';
import { useState } from 'react';
import DeleteCategoryDialog from './components/DeleteCategoryDialog';
import { Toaster } from 'sonner';
import CreateCategoryDialog from './components/CreateCategoryDialog';
import { CategoryProvider } from './context/CategoryContext';
import UpdateCategoryDialog from './components/UpdateCategoryDialog';

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
        <CreateCategoryDialog />
        <UpdateCategoryDialog />
        <DeleteCategoryDialog label="category" />
        <Toaster />
      </div>
    </CategoryProvider>
  );
}
