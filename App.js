import Text from './src/Components/text/text';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Pressable, Image, Button } from 'react-native';
import { spacing } from './src/theme/spacing';
import { colors } from './src/theme/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuNBell}>
        <Image source={require('./src/svg/images/menu.png')} />
        <Image source={require('./src/svg/images/bell.png')} />
      </View>
      <View style={styles.info}>
        <Text preset='h1'>Covid-19</Text>
        <Text style={styles.dropDown}>
          <Image style={{ borderRadius: 50 }} source={require('./src/svg/images/flag.png')} />
          <Text preset='h3' style={{ color: colors.black, marginLeft: 20 }}>USA</Text>
          <Image source={require('./src/svg/images/arrow.png')} />
        </Text>
      </View>
      <View preset='small'>
        <Text preset='h3' style={{ paddingTop: 25, paddingBottom: 10 }}>Are you feeling sick?</Text>
        <Text style={{ textWidth: 0.5 }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} title="Call Now" />
        <Button style={styles.button} title="Send SMS" />
      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 410,
    width: '100%',
    borderRadius: 25,
    position: 'absolute',
    paddingTop: spacing[8],
    backgroundColor: '#473F97',
    paddingHorizontal: spacing[6],
  },
  menuNBell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    paddingTop: spacing[8],
    backgroundColor: '#473F97',
    justifyContent: 'space-between',
  },
  dropDown: {
    // width: 25,
    // height: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
