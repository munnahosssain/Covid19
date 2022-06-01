import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/Components/text/text';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
