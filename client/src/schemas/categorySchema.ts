// schemas/categorySchema.ts
import { z } from 'zod';
import { CategoryType } from '@/app/dashboard/categories/types';

export const categorySchema = z.object({
  name: z.string().min(1, 'Nome da categoria é obrigatório'),
  description: z.string().optional(),
  icon: z.string().min(1, 'Ícone é obrigatório'),
  color: z.string().min(1),
  type: z.nativeEnum(CategoryType),
});

export type CategoryFormData = z.infer<typeof categorySchema>;
