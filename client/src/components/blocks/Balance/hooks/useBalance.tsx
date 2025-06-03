import { useState } from 'react';

export function useBalance() {
  const [showBalance, setShowBalance] = useState(false);

  const balance = 1000.0;

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return { balance, showBalance, toggleBalance };
}
