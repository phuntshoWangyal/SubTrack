import { StyleSheet, Text, View } from "react-native";

export default function SubscriptionCard() {
    return(
        <View style={styles.container}>
            <View style={styles.maxPriceCard}>
                <Text style={styles.header}>Highest Price</Text>
                <View style={styles.centerValue}>
                    <Text style={styles.text}>$ 30</Text>
                </View>
            </View>
            
            <View style={styles.activeSubCard}>
                <Text style={styles.header}>Active Subs</Text>
                <View style={styles.centerValue}>
                    <Text style={styles.text}>10</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection:"row",
        gap:20,
        marginStart:20,
        marginEnd:20
    },
    header:{
        color:"white",
        size:"10",
    },
    maxPriceCard:{
        flex:1,
        borderRadius:20,
        borderWidth:1,
        backgroundColor: "#1B1F2A",
        flex:1,
        minHeight:90,
        alignItems:"center",
        padding:10
    },

    activeSubCard:{
        flex:1,
        borderRadius:20,
        borderWidth:1,
        backgroundColor: "#1B1F2A",
        flex:1,
        minHeight:90,
        alignItems:"center",
        padding:12
    },

    value:{
        color:"white",
        size:"12",
        fontWeight:"bold"
    },
    text:{
        color:"white",
        size:"10",
        fontWeight:"bold",
       
        
    },
    centerValue:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})