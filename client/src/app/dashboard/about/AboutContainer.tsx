import Title from '@/components/blocks/Title';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  WalletIcon,
  ChartBarIcon,
  CreditCard,
  Settings,
  PieChart,
  TrendingUp,
  Shield,
  Clock,
} from 'lucide-react';

export default function AboutContainer() {
  const features = [
    {
      icon: <WalletIcon className="h-5 w-5" />,
      title: 'Comprehensive Transaction Tracking',
      description:
        'Record and categorize all your financial transactions with ease. Support for multiple currencies and detailed transaction history.',
    },
    {
      icon: <ChartBarIcon className="h-5 w-5" />,
      title: 'Visual Analytics',
      description:
        'Understand your finances better with intuitive charts and graphs showing income vs expenses, balance distribution, and spending trends.',
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: 'Expense Management',
      description:
        'Categorize and track your expenses with custom categories. Set budgets and receive notifications when approaching limits.',
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: 'Budget Planning',
      description:
        'Create and manage budgets across different categories. Track your progress and get insights into your spending habits.',
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Financial Insights',
      description:
        'Get detailed insights into your financial health with trend analysis and spending patterns recognition.',
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: 'Customizable Preferences',
      description:
        'Personalize your experience with customizable themes, currency options, and notification settings.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Secure & Private',
      description:
        'Your financial data is encrypted and secured. We prioritize your privacy and data security.',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Real-time Updates',
      description:
        'Stay on top of your finances with real-time transaction updates and balance tracking.',
    },
  ];

  return (
    <div className="space-y-6">
      <Title>About Fintrack</Title>

      <div className="prose dark:prose-invert max-w-none">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Your Personal Finance Companion
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fintrack is a powerful personal finance management tool designed to
            help you take control of your financial life. Whether you&apos;re
            tracking daily expenses, managing investments, or planning for the
            future, Fintrack provides all the tools you need in one elegant
            solution.
          </p>
        </div>

        <div className="mb-6">
          <Badge className="mb-4" variant="secondary">
            Version 0.1.0
          </Badge>
          <p className="text-muted-foreground">
            Built with modern technologies and designed with user experience in
            mind, Fintrack helps you make informed financial decisions through
            intuitive interfaces and powerful analytics.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">
            Get Started Today
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of users who are already managing their finances more
            effectively with Fintrack. Start your journey to better financial
            health today.
          </p>
        </div>
      </div>
    </div>
  );
}
