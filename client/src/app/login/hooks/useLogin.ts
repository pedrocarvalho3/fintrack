'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type LoginInput = { email: string; password: string };
type LoginResponse = { token: string };

export function useLogin() {
  const router = useRouter();

  return useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: async data => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseBody = await res.json();

      if (!res.ok) {
        throw new Error(responseBody.message || 'Login failed');
      }

      return responseBody;
    },
    onSuccess: data => {
      localStorage.setItem('auth_token', data.token);

      toast.success('Login successful', {
        description: 'Redirecting...',
        duration: 3000,
        position: 'top-right',
      });

      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
    },
    onError: err => {
      const msg = err.message.toLowerCase();

      if (msg.includes('user')) {
        toast.error('User not found', {
          description: 'Check your email.',
        });
      } else if (msg.includes('password')) {
        toast.error('Invalid password', {
          description: 'Try again carefully.',
        });
      } else {
        toast.error('Login error', {
          description: 'Something went wrong. Try later.',
        });
      }

      console.error('Login error:', err.message);
    },
  });
}
