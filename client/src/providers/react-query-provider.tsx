'use client';

import { queryCLient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
  );
}
