import { useState } from 'react';
import { Category } from '../types';
import { mockCategories } from '@/mocks/mock-categories';

export function useCategories(page: number, limit: number) {
  const [categories] = useState<Category[]>(mockCategories);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const paginatedCategories = categories.slice(
    (page - 1) * limit,
    page * limit,
  );

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(`/api/categories?page=${page}`)
  //       .then(res => res.json())
  //       .then(data => setCategories(data))
  //       .catch(err => setError(err.message))
  //       .finally(() => setLoading(false));
  //   }, [page]);

  return { categories: paginatedCategories, loading, error };
}
