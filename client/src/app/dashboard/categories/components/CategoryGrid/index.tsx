import { Category } from '../../types';
import CategoryList from './components/CategoryList';
import EmptyCategoryGrid from './components/EmptyCategoryGrid';

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (categories.length === 0) {
    return <EmptyCategoryGrid />;
  }

  return <CategoryList categories={categories} />;
}
