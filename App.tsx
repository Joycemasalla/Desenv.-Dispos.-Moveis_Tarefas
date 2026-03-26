import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from './src/navigation/Navigator';
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}