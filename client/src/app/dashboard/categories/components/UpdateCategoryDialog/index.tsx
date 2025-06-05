import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';

export default function UpdateCategoryDialog() {
  const {
    updateCategory: {
      updateCategoryDialogOpen,
      setUpdateCategoryDialogOpen,
      handleUpdateCategory,
    },
  } = useContext(CategoryContext)!;

  return (
    <Dialog
      open={updateCategoryDialogOpen}
      onOpenChange={setUpdateCategoryDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Category</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Update the category to update its information.
        </DialogDescription>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Category Name</Label>
            <Input type="text" placeholder="Category Name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Category Description</Label>
            <Input type="text" placeholder="Category Description" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Category Icon</Label>
            <Input type="text" placeholder="Category Icon" />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => setUpdateCategoryDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="default" onClick={handleUpdateCategory}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
