import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface LoginCardProps {
  onSubmit: (event: React.FormEvent) => void | Promise<void>;
  isLoading: boolean;
}

export default function LoginForm({ onSubmit, isLoading }: LoginCardProps) {
  return (
    <Card>
      <form onSubmit={onSubmit}>
        <CardContent className="grid gap-4 pt-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" disabled={isLoading} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              'Sign In'
            )}
          </Button>
          <Button
            variant="link"
            className="text-sm text-muted-foreground"
            asChild
          >
            <Link href="/forgot-password">Forgot password?</Link>
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
