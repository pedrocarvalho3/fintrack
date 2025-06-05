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
import { TransactionContext } from '../context/TransactionContext';

export default function UpdateTransactionDialog() {
  const {
    updateTransaction: {
      updateTransactionDialogOpen,
      setUpdateTransactionDialogOpen,
      handleUpdateTransaction,
    },
  } = useContext(TransactionContext)!;

  return (
    <Dialog
      open={updateTransactionDialogOpen}
      onOpenChange={setUpdateTransactionDialogOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Transaction</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Update the transaction to update its information.
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
            onClick={() => setUpdateTransactionDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="default" onClick={handleUpdateTransaction}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
