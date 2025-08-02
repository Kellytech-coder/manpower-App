import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Manpower Dashboard</Text>

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>34</Text>
          <Text style={styles.statLabel}>Available Workers</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Open Jobs</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Hired Today</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actions}>
        <Button title="View All Jobs" onPress={() => router.push('/jobs')} />
        <View style={{ height: 12 }} />
        <Button title="View Dashboard Workers" onPress={() => router.push('/dashboard')} />
      </View>

      <Text style={styles.sectionTitle}>Auth Actions</Text>
      <View style={styles.row}>
        <View style={{ flex: 1, marginRight: 6 }}>
          <Button title="Login" onPress={() => router.push('/login')} />
        </View>
        <View style={{ flex: 1, marginLeft: 6 }}>
          <Button title="Register" onPress={() => router.push('/register')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 10,
    flexWrap: 'wrap',
  },
  statCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    alignItems: 'center',
    minWidth: '30%',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  actions: {
    gap: 12,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
