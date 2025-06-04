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

interface EditCategoryDialogProps {
  editCategoryDialogOpen: boolean;
  setEditCategoryDialogOpen: (open: boolean) => void;
  handleEditCategory: () => void;
}

export default function EditCategoryDialog({
  editCategoryDialogOpen,
  setEditCategoryDialogOpen,
  handleEditCategory,
}: EditCategoryDialogProps) {
  return (
    <Dialog
      open={editCategoryDialogOpen}
      onOpenChange={setEditCategoryDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Edit the category to update its information.
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
            onClick={() => setEditCategoryDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="default" onClick={handleEditCategory}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
