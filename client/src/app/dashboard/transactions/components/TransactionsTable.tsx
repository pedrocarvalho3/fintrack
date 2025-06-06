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
import { ArrowRight, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface TransactionsTableProps {
  transactions: Transaction[];
  isRecent?: boolean;
}

export default function TransactionsTable({
  transactions,
  isRecent = false,
}: TransactionsTableProps) {
  const { setCurrentTransactionId, deleteTransaction, updateTransaction } =
    useContext(TransactionContext)!;

  if (transactions.length === 0) {
    return <EmptyTransactionTable />;
  }

  return (
    <>
      {isRecent && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Transactions</h2>
          <Link href="/dashboard/transactions">
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
      <Table className="border p-8">
        {!isRecent && (
          <TableCaption>A list of your recent transactions.</TableCaption>
        )}

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
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => {
                    setCurrentTransactionId(transaction.id);
                    deleteTransaction.setDeleteDialogOpen(true);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
