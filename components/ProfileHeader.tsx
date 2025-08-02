import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  name: string;
  role: string;
  avatar?: string;
};

export default function ProfileHeader({ name, role, avatar }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar || 'https://via.placeholder.com/100',
        }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  role: {
    color: '#555',
  },
});
