'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');

    if (!token) {
      router.push('/login');
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) {
          router.push('/login');
        }
      })
      .catch(() => {
        router.push('/login');
      });
  }, []);
}
