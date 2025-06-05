import { useState } from 'react';
import { Transaction } from '../types';
import { mockTransactions } from '@/mocks/mock-transactions';

export function useTransactions(page: number, limit: number) {
  const [transactions] = useState<Transaction[]>(mockTransactions);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const paginatedTransactions = transactions.slice(
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

  return { transactions: paginatedTransactions, loading, error };
}
