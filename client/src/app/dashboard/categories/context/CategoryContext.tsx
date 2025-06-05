import { createContext, useState } from 'react';
import useDeleteCategory from '../hooks/useDeleteCategory';
import useCreateCategory from '../hooks/useCreateCategory';
import useUpdateCategory from '../hooks/useUpdateCategory';

interface CategoryContextType {
  currentCategoryId: number | null;
  setCurrentCategoryId: (id: number | null) => void;
  createCategory: ReturnType<typeof useCreateCategory>;
  deleteCategory: ReturnType<typeof useDeleteCategory>;
  updateCategory: ReturnType<typeof useUpdateCategory>;
}

export const CategoryContext = createContext<CategoryContextType | null>(null);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentCategoryId, setCurrentCategoryId] = useState<number | null>(
    null,
  );

  const createCategory = useCreateCategory();
  const deleteCategory = useDeleteCategory(currentCategoryId);
  const updateCategory = useUpdateCategory(currentCategoryId);

  return (
    <CategoryContext.Provider
      value={{
        currentCategoryId,
        setCurrentCategoryId,
        createCategory,
        deleteCategory,
        updateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
