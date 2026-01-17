import { Pressable, StyleSheet, Text, View } from "react-native";

export default function OverViewCard(){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.header}>Monthly Bills</Text>
                <View  style={styles.ButtonContainer}>
                    <Pressable> 
                        <Text style={styles.text}>Daily</Text>
                    </Pressable>
                    
                    <Pressable>
                        <Text style={styles.text}>Weekly</Text>
                    </Pressable>
                     
                    <Pressable>
                        <Text style={styles.text}>Monthly</Text>
                    </Pressable>
                    
                </View>
            </View>

            <View style={styles.statsContainer}>
                <Text style={styles.header2}>$ 1,532</Text>

                <Pressable style={styles.button}>
                    <Text style={styles.text}>View your stats</Text>
                </Pressable>

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
        marginLeft:"auto",
    },
    header:{
        color:"white",
        fontSize:12,
        // fontWeight:1
    },  
    text:{
        color:"white",
        fontSize:10
        
    },
    statsContainer:{
        flexDirection:"row",
        margin:20,
   

    },
    header2:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
    },

    button:{
        borderWidth:1,
        borderRadius:20,
        borderColor:"grey",
        color:"white",
        marginLeft:"auto",
        height:"fit-content",
        padding:8,
        width:"fit-content",
    },

    
})