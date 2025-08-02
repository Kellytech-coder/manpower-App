// app/(tabs)/jobs.tsx

import JobCard from '@/components/cards/JobCard';
import { ScrollView, StyleSheet } from 'react-native';

export default function JobsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <JobCard
        title="Electrician Needed"
        location="Lagos"
        description="Install wiring in new building."
      />
      <JobCard
        title="Painter Needed"
        location="Abuja"
        description="Paint a 2-bedroom apartment."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
