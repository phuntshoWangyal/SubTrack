import { Stack } from "expo-router";
import { View } from "react-native";
import HeaderBar from "./components/Header";
import OverViewCard from "./components/OverviewCard";

export default function Index() {
  return (
    <View>
        <Stack.Screen options={{ headerShown: false }} />

      <HeaderBar/>
      <OverViewCard/>
    </View>
  )
}
