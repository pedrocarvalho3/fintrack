import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  return (
    <section className="pt-16">
      <div className="relative overflow-hidden rounded-lg border bg-gradient-to-r from-blue-50 to-cyan-50 p-8 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Ready to Start?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join thousands of users who are already managing their finances more
            effectively with Fintrack.
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/register">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
