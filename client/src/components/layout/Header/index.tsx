import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <SidebarTrigger />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">FinTrack</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-1 items-center justify-end gap-4">
        <h3>Hi, Pedro</h3>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="icon" className="relative">
          <Bell />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            9
          </span>
        </Button>
      </div>
    </header>
  );
}
