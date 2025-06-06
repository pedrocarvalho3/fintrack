import Title from '@/components/blocks/Title';
import SettingsTabs from './components/SettingsTabs';

export default function SettingsContainer() {
  return (
    <div className="space-y-6">
      <Title>Settings</Title>
      <SettingsTabs />
    </div>
  );
}
