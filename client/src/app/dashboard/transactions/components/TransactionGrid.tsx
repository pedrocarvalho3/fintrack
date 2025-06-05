import { Transaction } from '../types';
import TransactionCard from './TransactionCard';
import EmptyTransactionGrid from './EmptyTransactionGrid';

export default function TransactionGrid({
  transactions,
}: {
  transactions: Transaction[];
}) {
  if (transactions.length === 0) {
    return <EmptyTransactionGrid />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {transactions.map(transaction => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}
