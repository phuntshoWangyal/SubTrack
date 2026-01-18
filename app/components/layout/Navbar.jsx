import { Image, StyleSheet, View } from "react-native";
import AddSubscription from "../subscriptions/AddSubscription";
export default function Navbar() {
    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image source={require("../../../assets/images/home_icon.png")}style={styles.icon}></Image>
                <AddSubscription></AddSubscription>
                <Image source={require("../../../assets/images/trends_icon.png")}style={styles.icon}></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper :{
        alignItems:"center",

    },
    container:{
        justifyContent:"space-between",
        backgroundColor:"#1B1F2A",
        display:"flex",
        flexDirection:"row",
        width:"60%",
        height:60,
        borderRadius:40,
        alignItems:"center",
        marginBottom:20
    },
    icon:{
        width:30,
        height:30,
        margin:20
        
    }
})