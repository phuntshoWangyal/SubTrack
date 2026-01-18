import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function AddSubscription() {
    return(
        <View >
            <Pressable style={styles.container} onPress={() => router.push("/AddPage")}>
                <Image source={require("../../../assets/images/add_icon2.png") } style={styles.avatar}>

                </Image>
            </Pressable>
        </View>
    );
} 

const styles = StyleSheet.create({
    
    container:{
        // alignItems:"center",
        // margin:20
        
    },
    avatar:{
        width:50,
        height:50,
        backgroundColor:"transparent"
      
    }
})