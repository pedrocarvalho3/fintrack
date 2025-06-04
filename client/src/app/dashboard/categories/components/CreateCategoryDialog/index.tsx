import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CreateCategoryDialogProps {
  createCategoryDialogOpen: boolean;
  setCreateCategoryDialogOpen: (open: boolean) => void;
  handleCreateCategory: () => void;
}

export default function CreateCategoryDialog({
  createCategoryDialogOpen,
  setCreateCategoryDialogOpen,
  handleCreateCategory,
}: CreateCategoryDialogProps) {
  return (
    <Dialog
      open={createCategoryDialogOpen}
      onOpenChange={setCreateCategoryDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new category to organize your events.
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
            onClick={() => setCreateCategoryDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="default" onClick={handleCreateCategory}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
