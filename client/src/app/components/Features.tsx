import { WalletIcon, ChartBarIcon, CreditCard, PieChart } from 'lucide-react';

export default function Features() {
  return (
    <section className="space-y-8">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to manage your finances effectively
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
          <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
            <WalletIcon className="h-12 w-12 text-blue-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Transaction Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Record and categorize all your financial transactions with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
          <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
            <ChartBarIcon className="h-12 w-12 text-green-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Visual Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Understand your finances with intuitive charts and insights.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
          <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
            <CreditCard className="h-12 w-12 text-purple-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Expense Management</h3>
              <p className="text-sm text-muted-foreground">
                Set budgets and track spending across categories.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
          <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
            <PieChart className="h-12 w-12 text-orange-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Budget Planning</h3>
              <p className="text-sm text-muted-foreground">
                Create and manage budgets to reach your financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
