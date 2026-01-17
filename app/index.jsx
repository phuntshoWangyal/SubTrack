import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { subscription } from "../models/subscription";
import HeaderBar from "./components/headers/Header";
import AddSubscription from "./components/subscriptions/AddSubscription";
import OverViewCard from "./components/subscriptions/OverviewCard";
import SegmentedControl from "./components/subscriptions/SegmentedControl";
import SubscriptionCard from "./components/subscriptions/SubscriptionCard";
import SubscriptionItem from "./components/subscriptions/SubscriptionItem";

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
