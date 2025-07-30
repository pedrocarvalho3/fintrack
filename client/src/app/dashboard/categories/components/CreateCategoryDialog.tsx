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
import { useContext, useState } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { CategoryType, Category } from '../types';
import { suggestedIcons } from '../mocks/suggested-icons';
import { categoryColors } from '../mocks/category-colors';

export default function CreateCategoryDialog() {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    reset,
  } = useCreateCategoryForm(handleCreateCategory, () => setCreateCategoryDialogOpen(false));

  const getSuggestedIcons = () => {
    return Category. === CategoryType.INCOME
      ? suggestedIcons.income
      : suggestedIcons.expense;
  };

  return (
    <Dialog
      open={createCategoryDialogOpen}
      onOpenChange={setCreateCategoryDialogOpen}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Criar Nova Categoria</DialogTitle>
          <DialogDescription>
            Crie uma nova categoria para organizar suas transações financeiras.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="type">Tipo da Categoria</Label>
            <Select
              value={formData.type.toString()}
              onValueChange={value =>
                handleInputChange('type', parseInt(value) as CategoryType)
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
              type="text"
              placeholder="Ex: Alimentação, Salário, Transporte..."
              value={formData.name}
              onChange={e => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Descrição (Opcional)</Label>
            <Textarea
              id="description"
              placeholder="Descreva brevemente esta categoria..."
              value={formData.description}
              onChange={e => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="icon">Ícone *</Label>
            <div className="flex gap-2">
              <Input
                id="icon"
                type="text"
                placeholder="Digite um emoji ou ícone"
                value={formData.icon}
                onChange={e => handleInputChange('icon', e.target.value)}
                className={`flex-1 ${errors.icon ? 'border-red-500' : ''}`}
              />
              <div className="flex h-10 w-12 items-center justify-center rounded-md border bg-gray-50">
                <span className="text-lg">{formData.icon || '❓'}</span>
              </div>
            </div>
            {errors.icon && (
              <p className="text-sm text-red-500">{errors.icon}</p>
            )}

            <div className="grid gap-2">
              <Label className="text-sm text-gray-600">Ícones sugeridos:</Label>
              <div className="flex flex-wrap gap-2">
                {getSuggestedIcons().map((icon, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => handleInputChange('icon', icon)}
                    className="h-auto p-2"
                  >
                    {icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="color">Cor da Categoria</Label>
            <div className="flex gap-2">
              <Input
                id="color"
                type="color"
                value={formData.color}
                onChange={e => handleInputChange('color', e.target.value)}
                className="h-10 w-16 rounded-md border p-1"
              />
              <div className="flex flex-wrap gap-2">
                {categoryColors.map((color, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => handleInputChange('color', color)}
                    className="h-8 w-8 border-2 p-0"
                    style={{
                      backgroundColor: color,
                      borderColor: formData.color === color ? '#000' : color,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setCreateCategoryDialogOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>Criar Categoria</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}