import {View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {TamaguiProvider} from "tamagui";
import tamaguiConfig from "../../tamagui.config";

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <TamaguiProvider config={tamaguiConfig}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{flex: 1, alignItems: "center", justifyContent: "center"}}
          >
            <Text>Welcome to gymbro!</Text>
          </View>
        </SafeAreaView>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
