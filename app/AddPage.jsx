import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateSubHeader from "./components/layout/createSubHeader";
import CreateSubForm from "./components/subscriptions/CreateSubForm";

export default function AddPage() {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    billingCycle: "monthly",
    paymentDate: "",
  });
  

  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <CreateSubHeader></CreateSubHeader>
        <CreateSubForm></CreateSubForm>
      </View>
    </SafeAreaView>
  );
}
