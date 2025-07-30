import { Category } from '../types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type CategoriesRequest = {
  page: number;
  limit: number;
};

type CategoriesResponse = {
  data: Category[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export function useCategories({ page, limit }: CategoriesRequest) {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;

  return useQuery<CategoriesResponse>({
    queryKey: ['categories', page, limit],
    queryFn: async () => {
      const response = await axios.get<CategoriesResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        {
          params: { page, limit },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    },
    staleTime: 1000 * 60,
  });
}
