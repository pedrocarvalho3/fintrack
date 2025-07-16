'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type RegisterInput = { name: string; email: string; password: string };
type RegisterResponse = {
  message: string;
};

export function useRegister() {
  const router = useRouter();
  return useMutation<RegisterResponse, Error, RegisterInput>({
    mutationFn: async data => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      console.log(res);

      const responseBody = await res.json();

      if (!res.ok) {
        throw new Error(responseBody.message || 'Registration failed');
      }

      return responseBody;
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
