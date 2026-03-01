import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SegmentedControl({options, selectedValue, onChange}){
    return(
        
        <View style={styles.container}>

            {options.map((option) => {
            const isSelected = option.value === selectedValue;

            return (
                <Pressable
                key={option.value}
                style={[
                    styles.button,
                    isSelected && styles.activeButton,
                ]}
                onPress={() => onChange(option.value)}
                >
                <Text
                    style={[
                    styles.text,
                    isSelected && styles.activeText,
                    ]}
                >
                    {option.label}
                </Text>
                </Pressable>
            );
            })}

            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        // marginBottom:30,
        // backgroundColor: "#E6E3E3",
        flexDirection:"row",
        gap:10,
        borderRadius:20,
        // justifyContent:"center",
        alignSelf:"center",
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
    },
    activeButton: {
        backgroundColor: "#1B1F2A",
      },
      activeText: {
        color: "white",
        fontWeight: "600",
      },
      
      button: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 999,
      },
      
      buttonSelected: {
        backgroundColor: "#1B1F2A",
      },
      
      text: {
        fontSize: 14,
        color: "#1B1F2A",
      },
      
      textSelected: {
        color: "white",
      },
      
})