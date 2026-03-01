import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { handleAddSubscription } from "../../../controllers/SubscriptionController";
import SegmentedControl from "../Widgets/SegmentedControl";
export default function CreateSubForm() {

    const segments = [
        {label:"Monthly",value:"monthly"},
        {label:"Semi-Annually", value:"semi-annually"},
        {label:"Yearly", value:"yearly"}
      ];
    
    const [selectedTab, setSelectedTab] = useState("monthly")
    const [subName, setSubName] = useState("");
    const [price, setPrice] = useState(0);
    const [paymentDate, setPaymentDate] = useState("");
    const [icon, setIcon] = useState(null);


    const onAddPress = async() => {
        const result = await handleAddSubscription(
            subName,
            price,
            selectedTab,
            paymentDate,
            icon
        );
        if(result.success) {
            Toast.show({
                type:'success',
                text1: 'Subscription Added'
            }); 

            setSubName("");
            setPrice("");
            setPaymentDate("");
            setSelectedTab("monthly");
           
            router.push("/");

        }
    };

    const pickImage = async() =>{
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            quality: 1,
        });
        if(!result.canceled) {
            setIcon(result.assets[0].uri);
        };
    };
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textHeader}>Subscription Name</Text>
                        <TextInput style={styles.textInput} value={subName} onChangeText={setSubName}></TextInput>
                        <Text style={styles.textHeader}>Price</Text>
                        <TextInput keyboardType="decimal-pad" style={styles.textInput} value={price} onChangeText={setPrice}></TextInput>
                        <View>
                            <Text style={styles.textHeader}>Subscription Plan</Text>
                           <SegmentedControl
                                options={segments}
                                selectedValue = {selectedTab}
                                onChange={setSelectedTab}
                           />
                        </View>
                        <Text style={styles.textHeader}>Payment Date</Text>
                        <TextInput placeholder="DD-MM-YYYY " style={styles.textInput} value={paymentDate} onChangeText={setPaymentDate}></TextInput>
                        <Pressable style={styles.button} onPress={pickImage}>
                            <Text style={{ color: "white" }}>
                                {icon ? "Change Icon" : "Pick Icon"}
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.button} onPress={onAddPress}>
                        <Text style={styles.buttonText}>Add Subscription</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        // display:"flex",
        // flexDirection:"row",
        // alignItems:"center",
        borderWidth:1,
        borderColor:"black",
        borderRadius:20,
        width:"95%",
        alignSelf:"center",
        marginTop:20,
        backgroundColor:"white",
        marginBottom:20
    },
    inputContainer:{
        width:"90%",
        alignSelf:"center",
        marginBottom:30

    },

    
    textHeader:{
        marginTop:20,
        marginBottom:6,
        fontWeight:600
    },
    textInput: {
        borderWidth:1,
        borderColor:"black",
        width:"100%",
        justifyContent:"center",
        borderRadius:10
    },
    button: {
        borderWidth:1,
        borderColor:"black",
        alignSelf:"center",
        backgroundColor:"green",
        borderRadius:20,
        padding:10
    },
    buttonText:{
        fontWeight:600,
        color:"white",
        fontSize:16
    },
    iconButon:{
        
        borderWidth:1,
        borderColor:"black",
        alignSelf:"center",
        backgroundColor:"#1B1F2A",
        borderRadius:20,
        padding:10
   
    }
  
})

