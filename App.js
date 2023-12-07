import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// React native stack
import RootStack from './navegators/RootStack';

export default function App() {
  return (
    <RootStack/>
  );
}
