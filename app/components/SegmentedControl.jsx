import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SegmentedControl(){
    return(
        <View style={styles.container}>
            <Pressable style={styles.button} >
                <Text style={styles.text}>Your Subscriptions</Text>
            </Pressable>

            <Pressable style={styles.button2}>
                <Text style={styles.text2}>Upcoming Dues</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:30,
        // backgroundColor: "#E6E3E3",
        flexDirection:"row",
        gap:10,
        borderRadius:20,
        justifyContent:"center",
        height:"fit-content",
        padding:8,
        borderWidth:1,
        borderColor:"black",
        borderRadius:999

    },
    button:{
        backgroundColor:"#1B1F2A",
        borderRadius:20,
        padding:10
    },
    button2:{
        // backgroundColor:"#1B1F2A",
        borderRadius:20,
        padding:10
    },
    text:{
        color:"white",
        fontSize:14,
    },
    text2:{
        color:"black",
        fontSize:14,
    }
})