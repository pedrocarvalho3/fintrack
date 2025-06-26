'use client';

import { queryCLient } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';

type RegisterInput = { name: string; email: string; password: string };
type RegisterResponse = { user: { id: number; name: string; email: string } };

export function useRegister() {
  return useMutation<RegisterResponse, Error, RegisterInput>({
    mutationFn: async data => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseBody = await res.json();

      if (!res.ok) {
        throw new Error(responseBody.message || 'Falha no registro');
      }

      return responseBody;
    },
    onSuccess: data => {
      console.log('Usuário registrado:', data.user);
      // queryCLient.invalidateQueries(['currentUser']);
    },
    onError: err => {
      console.error('Erro ao registrar usuário:', err.message);
    },
  });
}
