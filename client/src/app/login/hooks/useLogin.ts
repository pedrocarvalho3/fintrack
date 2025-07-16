'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';

type LoginRequest = { email: string; password: string };

type LoginResponse = { token: string };

export function useLogin() {
  const router = useRouter();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: async data => {
      try {
        const response = await axios.post<LoginResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/login`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        return response.data;
      } catch (error) {
        const err = error as AxiosError<{ message?: string }>;
        const message = err.response?.data?.message || 'Login failed';
        throw new Error(message);
      }
    },
    onSuccess: data => {
      localStorage.setItem('auth_token', data.token);

      toast.success('Login successful', {
        description: 'Redirecting...',
        duration: 3000,
        position: 'top-right',
      });

      router.push('/dashboard');
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
