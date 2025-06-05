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
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

export default function CreateTransactionDialog() {
  const {
    createTransaction: {
      createTransactionDialogOpen,
      setCreateTransactionDialogOpen,
      handleCreateTransaction,
    },
  } = useContext(TransactionContext)!;

  return (
    <Dialog
      open={createTransactionDialogOpen}
      onOpenChange={setCreateTransactionDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Transaction</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new transaction to organize your events.
        </DialogDescription>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Transaction Name</Label>
            <Input type="text" placeholder="Transaction Name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Transaction Description</Label>
            <Input type="text" placeholder="Transaction Description" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Transaction Icon</Label>
            <Input type="text" placeholder="Transaction Icon" />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => setCreateTransactionDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="default" onClick={handleCreateTransaction}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
