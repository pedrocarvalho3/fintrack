import { Category } from '../types';
import CategoryCard from './CategoryCard';
import EmptyCategoryGrid from './EmptyCategoryGrid';

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  if (categories.length === 0) {
    return <EmptyCategoryGrid />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
