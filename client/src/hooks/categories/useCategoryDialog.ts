import { useState } from 'react';

export function useCategoryDialog() {
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  function openForCreate() {
    setCategoryId(null);
    setOpen(true);
  }

  function openForEdit(id: string) {
    setCategoryId(id);
    setOpen(true);
  }

  console.log(open);

  return { open, setOpen, categoryId, openForCreate, openForEdit };
}
