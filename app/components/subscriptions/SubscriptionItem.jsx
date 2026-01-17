import { Image, StyleSheet, Text, View } from "react-native";
export default function SubscriptionItem({ name, price, billingCycle,icon }) {
    return (
      <View style={styles.container}>
        <View>
          <Image source ={icon} style={styles.icon}></Image>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.text}>{billingCycle}</Text>
          
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text><Text style={styles.text}>/MO</Text>
        </View>

      </View>
    );
  }
  
const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    borderRadius:20,
    marginStart:30,
    marginEnd:30,
    margin:5,
    borderWidth:1,
    borderColor:"#E5E7EB",
    elevation:2,
    flexDirection:"row",
    // justifyContent:"space-between",
    alignItems: "center",         

    
  },
  headerContainer:{
    padding:10
  },
  priceContainer:{
    flexDirection:"row",
    alignItems:"baseline",
    padding:10,
    marginLeft:"auto"
  },
  header:{
    fontSize:14,
    fontWeight:"bold"
  },
  text:{
    color:"black",
    fontSize:12
  },
  price:{
    fontSize:14,
    fontWeight:"bold",

  },
  icon:{
    width:30,
    height:30,
    borderRadius:10,
    marginStart:20
  }
})