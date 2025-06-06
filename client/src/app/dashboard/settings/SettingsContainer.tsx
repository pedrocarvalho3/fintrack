import Title from '@/components/blocks/Title';
import SettingsCard from './components/SettingsCard';

export default function SettingsContainer() {
  return (
    <div className="space-y-6">
      <Title>Settings</Title>
      <SettingsCard />
    </div>
  );
}
