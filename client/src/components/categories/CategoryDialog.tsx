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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useContext } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { CategoryType } from '../types';
import { suggestedIcons } from '../mocks/suggested-icons';
import { categoryColors } from '../mocks/category-colors';
import { useCreateCategoryForm } from '../../../../hooks/categories/useCreateCategoryForm';

export function CategoryDialog() {
  const isEdit = false;

  const {
    createCategory: {
      createCategoryDialogOpen,
      setCreateCategoryDialogOpen,
      handleCreateCategory,
    },
  } = useContext(CategoryContext)!;

  const onSubmit = handleCreateCategory;

  const { register, handleSubmit, errors, setValue, watch } =
    useCreateCategoryForm(onSubmit, () => {
      setCreateCategoryDialogOpen(false);
    });

  const type = watch('type');
  const icon = watch('icon');
  const color = watch('color');

  const getSuggestedIcons = () =>
    type === CategoryType.INCOME
      ? suggestedIcons.income
      : suggestedIcons.expense;

  return (
    <Dialog
      open={createCategoryDialogOpen}
      onOpenChange={setCreateCategoryDialogOpen}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? 'Editar Categoria' : 'Criar Nova Categoria'}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? 'Atualize os dados da categoria selecionada.'
              : 'Crie uma nova categoria para organizar suas transações financeiras.'}
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
          <div className="grid gap-2">
            <Label htmlFor="type">Tipo da Categoria</Label>
            <Select
              value={type.toString()}
              onValueChange={value =>
                setValue('type', parseInt(value) as CategoryType)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={CategoryType.INCOME.toString()}>
                  💰 Receita
                </SelectItem>
                <SelectItem value={CategoryType.EXPENSE.toString()}>
                  💸 Despesa
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="name">Nome da Categoria *</Label>
            <Input
              id="name"
              placeholder="Ex: Alimentação, Salário..."
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Descrição (Opcional)</Label>
            <Textarea
              id="description"
              placeholder="Ex: Despesas com comida"
              {...register('description')}
              rows={3}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="icon">Ícone *</Label>
            <div className="flex gap-2">
              <Input
                id="icon"
                placeholder="Digite um emoji ou ícone"
                {...register('icon')}
                className={`flex-1 ${errors.icon ? 'border-red-500' : ''}`}
              />
              <div className="flex h-10 w-12 items-center justify-center rounded-md border bg-gray-50">
                <span className="text-lg">{icon || '❓'}</span>
              </div>
            </div>
            {errors.icon && (
              <p className="text-sm text-red-500">{errors.icon.message}</p>
            )}

            <Label className="text-sm text-gray-600">Ícones sugeridos:</Label>
            <div className="flex flex-wrap gap-2">
              {getSuggestedIcons().map((iconOption, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => setValue('icon', iconOption)}
                  className="h-auto p-2"
                >
                  {iconOption}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="color">Cor da Categoria</Label>
            <div className="flex gap-2">
              <Input
                id="color"
                type="color"
                {...register('color')}
                className="h-10 w-16 rounded-md border p-1"
              />
              <div className="flex flex-wrap gap-2">
                {categoryColors.map((colorOption, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => setValue('color', colorOption)}
                    className="h-8 w-8 border-2 p-0"
                    style={{
                      backgroundColor: colorOption,
                      borderColor: color === colorOption ? '#000' : colorOption,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCreateCategoryDialogOpen(false);
              }}
            >
              Cancelar
            </Button>
            <Button type="submit">
              {isEdit ? 'Salvar Alterações' : 'Criar Categoria'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
