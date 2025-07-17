'use client';

import { useRouter } from 'next/navigation';

export function useLogout() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem('auth_token');
    router.push('/login');
  }

  return logout;
}
