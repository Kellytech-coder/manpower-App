// app/register.tsx

import RegisterForm from '@/components/form/RegisterForm';
import { StyleSheet, Text, View } from 'react-native';

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
