import { StyleSheet, Text, View } from "react-native";

export default function OverViewCard(){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Monthly Bills</Text>
                 
            </View>
            <View  style={styles.ButtonContainer}>
                    <Text style={styles.text}>Daily</Text>
                    <Text style={styles.text}>Weekly</Text>
                    <Text style={styles.text}>Monthly</Text>
                    
            </View>

          

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 16,
        padding: 18,
        borderRadius: 30,
        backgroundColor: "#1B1F2A",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
       
    },
    textContainer:{
        flexDirection:"row",
    },
    ButtonContainer:{
        flexDirection:"row",
        gap:10,
        justifyContent:"right"
    },
    text:{
        color:"white"
    }


    
})