import { Image, StyleSheet, Text, View } from "react-native";

export default function HeaderBar(){
    return(
        <View style={styles.screen}>
            <View style={styles.header}>
                
                <View style={styles.left}>
                    <Image source={require("../../assets/images/avatar_icon.png")} style={styles.avatar}></Image>
                    <View >
                        <Text style={styles.greeting}>Hey 👋</Text>
                        <Text style={styles.name}>Phuntsho</Text>
                    </View>
                   
                </View>
                <View style={styles.right}>
                    <Image source={require("../../assets/images/history_icon.png")} style={styles.avatar}></Image>
                    <Image source={require("../../assets/images/notification_icon.png")} style={styles.avatar}></Image>
                    <Image source={require("../../assets/images/settings_icon1.png")} style={styles.avatar}></Image>
            </View>
            </View>

          
        </View>
    );  
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor:"0F1117",
        marginTop:20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal: 18,
        paddingTop: 50,
        paddingBottom:12,
    },
    left: {
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },
    right: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"right",
        gap:16,
    },
    greeting: {
        color: "black",
        fontSize:16,
        fontWeight:600,
        marginTop:2,
    },
    avatar: {
        width:30,
        height:30,
        borderRadius:10,
    },
});