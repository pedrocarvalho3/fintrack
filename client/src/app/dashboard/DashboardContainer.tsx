import Title from '@/components/blocks/Title';
import DashboardGrid from './components/DashboardGrid';

export default function DashboardContainer() {
  return (
    <div className="space-y-6">
      <Title>Dashboard</Title>
      <DashboardGrid />
    </div>
  );
}
