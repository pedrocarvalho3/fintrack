import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t px-4 py-6 md:py-0">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
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
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ for better financial management.{' '}
            <a href="#" className="font-medium underline underline-offset-4">
              Terms
            </a>
            .{' '}
            <a href="#" className="font-medium underline underline-offset-4">
              Privacy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
