import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import RegisterCard from './components/RegisterCard';

export default function RegisterPage() {
  return (
    <div className="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className="absolute right-4 top-4 md:right-8 md:top-8"
      >
        <Button variant="ghost">Already have an account? Sign in</Button>
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/1200/1600')",
          }}
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
            src="/logo_light.svg"
            alt="Fintrack Logo"
            width={100}
            height={40}
          />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Since using this app, I&apos;ve saved more money than ever
              before. The budgeting features are game-changing.&rdquo;
            </p>
            <footer className="text-sm">Alex Thompson</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <RegisterCard />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking create account, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
