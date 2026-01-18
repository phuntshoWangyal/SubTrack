import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateSubHeader from "./components/layout/createSubHeader";
export default function AddPage() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <CreateSubHeader></CreateSubHeader>
      </View>
    </SafeAreaView>
  );
}
