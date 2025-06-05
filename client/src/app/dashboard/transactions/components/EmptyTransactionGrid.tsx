export default function EmptyTransactionGrid() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="text-2xl font-bold">No Transactions Found!</div>
      <div className="text-sm text-gray-500">
        Create a new transaction to get started.
      </div>
    </div>
  );
}
