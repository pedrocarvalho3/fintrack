import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Transaction } from '../types';
import EmptyTransactionTable from './EmptyTransactionTable';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Pencil, Trash2 } from 'lucide-react';

export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const { setCurrentTransactionId, deleteTransaction, updateTransaction } =
    useContext(TransactionContext)!;

  if (transactions.length === 0) {
    return <EmptyTransactionTable />;
  }

  return (
    <Table className="border p-8">
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map(transaction => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.category.name}</TableCell>
            <TableCell className="text-right">{transaction.amount}</TableCell>
            <TableCell className="text-right">
              {transaction.date.toLocaleDateString()}
            </TableCell>
            <TableCell className="flex justify-end gap-2 text-right">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setCurrentTransactionId(transaction.id);
                  updateTransaction.setUpdateTransactionDialogOpen(true);
                }}
              >
                <Pencil className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => {
                  setCurrentTransactionId(transaction.id);
                  deleteTransaction.setDeleteDialogOpen(true);
                }}
              >
                <Trash2 className="ml-2 h-4 w-4 text-red-500" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
