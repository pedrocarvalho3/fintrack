'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';

type RegisterRequest = { name: string; email: string; password: string };

type RegisterResponse = {
  message: string;
};

export function useRegister() {
  const router = useRouter();

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async data => {
      try {
        const response = await axios.post<RegisterResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/register`,
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
        const message = err.response?.data?.message || 'Registration failed';
        throw new Error(message);
      }
    },
    onSuccess: () => {
      toast.success('Registration successful', {
        description: 'Redirecting to login...',
        duration: 3000,
        position: 'top-right',
      });

      router.push('/login');

      // queryClient.invalidateQueries(['currentUser']);
    },
    onError: err => {
      const msg = err.message.toLowerCase();

      if (msg.includes('email') && msg.includes('registered')) {
        toast.error('Email already registered', {
          description: 'Please use a different email.',
          duration: 3000,
          position: 'top-right',
        });
      } else {
        toast.error('Registration error', {
          description: 'An unexpected error occurred. Please try again later.',
          duration: 3000,
          position: 'top-right',
        });
      }

      console.error('User registration error:', err.message);
    },
  });
}
