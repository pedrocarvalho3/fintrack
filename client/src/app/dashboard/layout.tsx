'use client';

import { AppSidebar } from '@/components/blocks/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuthGuard();

  return (
    <SidebarProvider>
      <AppSidebar>
        <main className="flex-1 p-8">{children}</main>
      </AppSidebar>
    </SidebarProvider>
  );
}
