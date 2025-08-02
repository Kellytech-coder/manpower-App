import { StyleSheet, Text, View } from 'react-native';

type Props = {
  name: string;
  skill: string;
  availability: string;
};

export default function WorkerCard({ name, skill, availability }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>{skill}</Text>
      <Text style={styles.availability}>{availability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    backgroundColor: '#e6f0ff',
    borderRadius: 10,
    marginVertical: 6,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  availability: {
    marginTop: 4,
    fontStyle: 'italic',
    color: 'green',
  },
});
