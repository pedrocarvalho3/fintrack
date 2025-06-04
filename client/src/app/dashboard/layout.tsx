import { AppSidebar } from '@/components/blocks/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar>
        <main className="flex-1">{children}</main>
      </AppSidebar>
    </SidebarProvider>
  );
}
