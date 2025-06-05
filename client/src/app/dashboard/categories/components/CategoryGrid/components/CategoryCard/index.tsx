import { Category, CategoryType, StatusType } from '../../../../types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { CategoryContext } from '@/app/dashboard/categories/context/CategoryContext';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { setCurrentCategoryId, deleteCategory, updateCategory } =
    useContext(CategoryContext)!;

  return (
    <Card
      key={category.id}
      className="overflow-hidden transition-shadow hover:shadow-lg"
    >
      <CardContent className="py-4">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <div>
              <Badge
                variant={
                  category.status === StatusType.ACTIVE
                    ? 'default'
                    : 'secondary'
                }
              >
                {category.status === StatusType.ACTIVE
                  ? '✅ Active'
                  : '🚫 Inactive'}
              </Badge>
            </div>
            <div>
              <Badge
                variant={
                  category.type === CategoryType.INCOME
                    ? 'default'
                    : 'secondary'
                }
              >
                {category.type === CategoryType.INCOME ? ' Entrada' : 'Saída'}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="text-2xl">{category.icon}</div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
            <p className="text-sm text-gray-500">
              {category.transactionCount} transactions
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => {
            setCurrentCategoryId(category.id);
            updateCategory.setUpdateCategoryDialogOpen(true);
          }}
        >
          Edit <Pencil className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setCurrentCategoryId(category.id);
            deleteCategory.setDeleteDialogOpen(true);
          }}
        >
          Delete <Trash2 className="ml-2 h-4 w-4 text-red-500" />
        </Button>
      </CardFooter>
    </Card>
  );
}
