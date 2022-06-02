import Text from './src/Components/text/text';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Pressable, Image, Button } from 'react-native';
import { spacing } from './src/theme/spacing';
import { colors } from './src/theme/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.menuNBell}>
          <Image source={require('./src/svg/images/menu.png')} />
          <Image source={require('./src/svg/images/bell.png')} />
        </View>
        <View style={styles.info}>
          <Text preset='h1'>Covid-19</Text>
          <View style={styles.dropDown}>
            <Text>
              <Image style={{ borderRadius: 50 }} source={require('./src/svg/images/flag.png')} />
              <Text preset='h4' style={{ color: colors.black, fontWeight: 'bold' }}>  USA  </Text>
              <Image source={require('./src/svg/images/arrow.png')} />
            </Text>
          </View>
        </View>
        <View preset='small'>
          <Text preset='h3' style={{ paddingTop: 25, paddingBottom: 10 }}>Are you feeling sick?</Text>
          <Text style={{ textWidth: 0.5 }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
        </View>
        <View style={styles.buttons}>
          <View preset='h4' style={{ backgroundColor: '#FF4D58', borderRadius: 25, height: 50, width: 140, textAlign: 'center' }}>
            <Text style={{ margin: 12 }}>
              <Image source={require('./src/svg/images/call.png')} />{'  '}
              Call Now
            </Text>
          </View>
          <View preset='h4' style={{ backgroundColor: '#4D79FF', borderRadius: 25, height: 50, width: 140, textAlign: 'center' }}>
            <Text style={{ margin: 12 }}>
              <Image source={require('./src/svg/images/sms.png')} />{'  '}
              Send SMS
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: spacing[6], marginVertical: spacing[12] }}>
        <Text preset='h2' style={styles.warnings}>Prevention</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image source={require('./src/svg/images/menDistance.png')} />
          <Image source={require('./src/svg/images/waterTap.png')} />
          <Image source={require('./src/svg/images/faceMask.png')} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: 13, alignItems: 'center' }}>Avoid close{"\n"} contact</Text>
          <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: 13 }}>Clean your{"\n"} hands often</Text>
          <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: 13 }}>Wear a{"\n"} facemask</Text>
        </View>
        <View style={styles.medicalTest}>
          <Image style={{ height: 131, width: 130, marginLeft: spacing[2] }} source={require('./src/svg/images/women.png')} />
          <View style={{ marginLeft: spacing[3], marginTop: spacing[6] }}>
            <Text preset='h4' style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 10 }}>Do your own test!</Text>
            <Text>Follow the instructions{"\n"}to do your own test.</Text>
          </View>
        </View>
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
    position: 'absolute',
    paddingTop: spacing[8],
    backgroundColor: '#473F97',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
    height: 45,
    width: 120,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  warnings: {
    paddingTop: 420,
    color: colors.black,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  medicalTest: {
    marginTop: 30,
    height: 130,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#56549E'
  }
});