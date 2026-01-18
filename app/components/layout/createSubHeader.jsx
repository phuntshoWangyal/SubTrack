import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function CreateSubHeader() {
    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <Pressable onPress={() => router.push("/")}>
                    <Image source={require("../../../assets/images/back_icon.png")}  style={styles.icon}></Image>
                </Pressable>
                <Text style={styles.header}>Create a Subscription</Text>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    screen:{
        marginTop:40
    },
    container:{
        display: "flex",
        flexDirection:"row",
        margin:10,
        alignItems:"center"
    },
    icon:{
        width:20,
        height:20,
        marginEnd:20
    },
    header :{
        fontSize:20,
        fontWeight:600
    }
})