import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchSubscriptions, initDB } from "../models/subscriptionModel";
import HeaderBar from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import OverViewCard from "./components/subscriptions/OverviewCard";
import SubscriptionCard from "./components/subscriptions/SubscriptionCard";
import SubscriptionItem from "./components/subscriptions/SubscriptionItem";
import SegmentedControl from "./components/Widgets/SegmentedControl";


export default function Index() {
  
useEffect(() => {
  // resetDB().then(initDB());
  initDB();
}, []);


  const homeSegments = [
    { label: "Your Subscriptions", value: "subscriptions" },
    { label: "Upcoming Dues", value: "upcoming" },
  ];
  
  const [selectedTab, setSelectedTab] = useState("subscriptions");
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetchSubscriptions().then(setSubscriptions);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <HeaderBar/>
        <OverViewCard/>
        <SubscriptionCard />
        <SegmentedControl
          options={homeSegments}
          selectedValue={selectedTab}
          onChange={setSelectedTab}
      />
        <View style={{marginTop:30,marginBottom:20}}>
          <FlatList
            data={subscriptions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SubscriptionItem {...item} />}
          
          />
        </View>
        <Navbar></Navbar>
    </SafeAreaView>
  )
}
