import { createContext, useState } from 'react';
import useDeleteTransaction from '../hooks/useDeleteTransaction';
import useCreateTransaction from '../hooks/useCreateTransaction';
import useUpdateTransaction from '../hooks/useUpdateTransaction';

interface TransactionContextType {
  currentTransactionId: number | null;
  setCurrentTransactionId: (id: number | null) => void;
  createTransaction: ReturnType<typeof useCreateTransaction>;
  deleteTransaction: ReturnType<typeof useDeleteTransaction>;
  updateTransaction: ReturnType<typeof useUpdateTransaction>;
}

export const TransactionContext = createContext<TransactionContextType | null>(
  null,
);

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentTransactionId, setCurrentTransactionId] = useState<
    number | null
  >(null);

  const createTransaction = useCreateTransaction();
  const deleteTransaction = useDeleteTransaction(currentTransactionId);
  const updateTransaction = useUpdateTransaction(currentTransactionId);

  return (
    <TransactionContext.Provider
      value={{
        currentTransactionId,
        setCurrentTransactionId,
        createTransaction,
        deleteTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
