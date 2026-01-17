import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { subscription } from "../models/subscription";
import AddSubscription from "./AddSubscription";
import HeaderBar from "./components/Header";
import OverViewCard from "./components/OverviewCard";
import SegmentedControl from "./components/SegmentedControl";
import SubscriptionCard from "./components/SubscriptionCard";
import SubscriptionItem from "./components/SubscriptionItem";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <HeaderBar/>
        <OverViewCard/>
        <SubscriptionCard />
        <SegmentedControl/>
        <FlatList
          data={subscription}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SubscriptionItem {...item} />}
          
        />
        <AddSubscription ></AddSubscription>
    </SafeAreaView>
  )
}
