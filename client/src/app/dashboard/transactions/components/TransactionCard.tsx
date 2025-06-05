import { Transaction } from '../types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

interface TransactionCardProps {
  transaction: Transaction;
}

export default function TransactionCard({ transaction }: TransactionCardProps) {
  const { setCurrentTransactionId, deleteTransaction, updateTransaction } =
    useContext(TransactionContext)!;

  return (
    <Card
      key={transaction.id}
      className="overflow-hidden transition-shadow hover:shadow-lg"
    >
      <CardContent className="py-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="text-2xl">{transaction.icon}</div>
              <h3 className="text-lg font-semibold">{transaction.name}</h3>
            </div>
            <p className="text-sm text-gray-500">{transaction.description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => {
            setCurrentTransactionId(transaction.id);
            updateTransaction.setUpdateTransactionDialogOpen(true);
          }}
        >
          Edit <Pencil className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setCurrentTransactionId(transaction.id);
            deleteTransaction.setDeleteDialogOpen(true);
          }}
        >
          Delete <Trash2 className="ml-2 h-4 w-4 text-red-500" />
        </Button>
      </CardFooter>
    </Card>
  );
}
