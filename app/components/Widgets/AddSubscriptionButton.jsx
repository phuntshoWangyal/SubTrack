import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AddSubscriptionButton({onPress}) {
    return(
        <View>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Add Subscription</Text>
            </Pressable>
        </View>
    );
}


const styles=StyleSheet.create({
    button: {
        borderWidth:1,
        borderColor:"black",
        alignSelf:"center",
        backgroundColor:"#1B1F2A",
        borderRadius:20,
        padding:10
    },
    buttonText:{
        fontWeight:600,
        color:"white",
        fontSize:16
    }
})