import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  location: string;
  description: string;
};

export default function JobCard({ title, location, description }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  location: {
    color: '#555',
    marginVertical: 4,
  },
  desc: {
    fontSize: 14,
    color: '#777',
  },
});
