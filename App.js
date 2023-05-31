import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/navigation';
import {useFonts} from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    KRegular: require("./src/assets/font/Karla-Regular.ttf"),
   MBold: require('./src/assets/font/MarkaziText-Regular.ttf'),
   
  });

  if (!loaded) {
    return null;
  }

  return (
      <AppNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
