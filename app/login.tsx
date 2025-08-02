import LoginForm from '@/components/form/LoginForm';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Manpower App</Text>
      <LoginForm />
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
