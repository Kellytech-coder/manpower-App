// app/(tabs)/workers.tsx

import WorkerCard from '@/components/cards/WorkersCard';
import { ScrollView, StyleSheet } from 'react-native';

export default function WorkersScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WorkerCard name="Ayo Johnson" skill="Electrician" availability="Available" />
      <WorkerCard name="Fatima Bello" skill="Painter" availability="Not Available" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
