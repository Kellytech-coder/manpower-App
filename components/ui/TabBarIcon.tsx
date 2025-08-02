import { Ionicons } from '@expo/vector-icons';

type Props = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
};

export default function TabBarIcon({ name, color }: Props) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} name={name} color={color} />;
}
