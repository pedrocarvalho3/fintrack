export default function EmptyCategoryGrid() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="text-2xl font-bold">No Categories Found!</div>
      <div className="text-sm text-gray-500">
        Create a new category to get started.
      </div>
    </div>
  );
}
