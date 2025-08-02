// app/(tabs)/profile.tsx

import ProfileHeader from '@/components/ProfileHeader';
import { StyleSheet, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileHeader
        name="John Doe"
        role="Admin"
        avatar="https://i.pravatar.cc/100"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
