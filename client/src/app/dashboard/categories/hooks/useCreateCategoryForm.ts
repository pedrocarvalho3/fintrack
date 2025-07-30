import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { categorySchema, CategoryFormData } from '@/schemas/categorySchema';
import { Category, StatusType } from '../types';

const DEFAULT_COLOR = '#ef4444';

export const useCreateCategoryForm = (
  onSubmit: (data: Category) => void,
  onClose: () => void
) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      description: '',
      icon: '',
      color: DEFAULT_COLOR,
      type: 1,
    },
  });

  const handleFormSubmit = (data: CategoryFormData) => {
    const formattedData = {
      ...data,
      status: StatusType.ACTIVE,
    };
    onSubmit(formattedData);
    reset();
    onClose();
  };

  return {
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    errors,
    setValue,
    watch,
    reset,
  };
};
