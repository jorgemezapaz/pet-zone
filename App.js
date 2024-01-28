// React native stack
import RootStack from './navegators/RootStack';
import FlashMessage from "react-native-flash-message";


export default function App() {
  return (
    <>
      <RootStack/>  
      <FlashMessage position="top" />
    </>
  );
}
