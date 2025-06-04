import { Category, CategoryType, StatusType } from '../../../../types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2 } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  setDeleteDialogOpen: (open: boolean) => void;
  setCategoryId: (id: number) => void;
  setEditCategoryDialogOpen: (open: boolean) => void;
}

export default function CategoryCard({
  category,
  setDeleteDialogOpen,
  setCategoryId,
  setEditCategoryDialogOpen,
}: CategoryCardProps) {
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
            setEditCategoryDialogOpen(true);
            setCategoryId(category.id);
          }}
        >
          Edit <Pencil className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setDeleteDialogOpen(true);
            setCategoryId(category.id);
          }}
        >
          Delete <Trash2 className="ml-2 h-4 w-4 text-red-500" />
        </Button>
      </CardFooter>
    </Card>
  );
}
