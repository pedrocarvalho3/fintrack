'use client';

import { Home, Wallet, FolderTree, Info, LogOut, Settings } from 'lucide-react';
import Image from 'next/image';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { useTheme } from 'next-themes';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Transactions',
    url: '/transactions',
    icon: Wallet,
  },
  {
    title: 'Categories',
    url: '/categories',
    icon: FolderTree,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
  {
    title: 'About',
    url: '/about',
    icon: Info,
  },
];

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <>
      <Sidebar>
        <SidebarHeader className="p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#" className="flex items-center gap-2">
                  <div className="flex flex-col gap-2 leading-none">
                    <Image
                      src={
                        theme === 'dark' ? '/logo_light.svg' : '/logo_dark.svg'
                      }
                      alt="Logo"
                      width={100}
                      height={100}
                    />
                    <span className="text-xs text-sidebar-foreground/70">
                      Manage your finances
                    </span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="mb-4 text-lg font-medium">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a
                  href="#"
                  className="text-sidebar-foreground/70 hover:text-sidebar-foreground"
                >
                  <LogOut />
                  <span>Logout</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <Header />
        <main>{children}</main>
      </SidebarInset>
    </>
  );
}
