import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo_dark.svg"
            alt="Fintrack Logo"
            width={100}
            height={40}
            className="hidden dark:block"
          />
          <Image
            src="/logo_dark.svg"
            alt="Fintrack Logo"
            width={100}
            height={40}
            className="block dark:hidden"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden gap-4 sm:flex">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
