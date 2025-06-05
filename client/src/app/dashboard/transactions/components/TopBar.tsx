'use client';

import { Filter, Search } from 'lucide-react';

import { RefreshCw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
// import { CategoryContext } from '../../context/CategoryContext';
// import { useContext } from 'react';

interface TopBarProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
  handleRefresh: () => void;
}

export default function TopBar({
  searchTerm,
  handleSearch,
  handleRefresh,
}: TopBarProps) {
  // const { createCategory } = useContext(CategoryContext)!;

  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex w-full flex-1 gap-2 sm:w-auto">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            placeholder="Search categories..."
            value={searchTerm}
            onChange={e => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon" onClick={handleRefresh}>
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
      <Button
        className="w-full sm:w-auto"
        // onClick={() => createCategory.setCreateCategoryDialogOpen(true)}
      >
        <Plus className="mr-2 h-4 w-4" />
        Create New Category
      </Button>
    </div>
  );
}
