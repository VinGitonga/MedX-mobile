import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Appointments = () => {
    return (
        <View style={tw`px-5 mt-8 h-full`}>
            {/* Header Section */}
            <View>
                <View style={tw`flex flex-row items-center justify-between mb-2`}>
                    <MaterialCommunityIcons name="calendar-edit" size={24} />
                    <Feather name="more-horizontal" size={24} />
                </View>
                <Text style={styles.headerText}>Appointments</Text>
            </View>
            {/* Todo Add Tabs  */} 
            {/* Later on */}
            {/* Appointments */}
            <ScrollView style={{marginVertical:15}} showsVerticalScrollIndicator={false}>
                {[...Array(12)].map((_, i) => (
                    <Item key={i} />
                ))}
            </ScrollView>
        </View>
    );
};

const Item = () => {
    return (
        <View style={[tw`w-full`, styles.container]}>
            {/* Flex Row Item */}
            <View style={tw`flex flex-row items-center justify-between`}>
                {/* 1. Avatar of Image */}
                <Image
                    source={{
                        uri: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    }}
                    style={styles.image}
                />
                {/* 2. 3 Texts in a column */}
                <View
                    style={[tw`flex justify-evenly`, styles.itemDetails]}
                >
                    <Text style={styles.text1} >Amber Julia</Text>
                    <Text style={styles.text2} >24th Feb 2022</Text>
                    <Text style={styles.text3} >10:00 AM</Text>
                </View>
                {/* 3. Item status */}
                <View style={styles.statusItem}>
                    <Text style={[tw`text-center m-auto text-white`, styles.statusText]}>Confirmed</Text>
                </View>
            </View>
            <View style={styles.divider} />
        </View>
    );
};


const styles = StyleSheet.create({
    headerText: {
        fontSize: 21,
        fontWeight: "bold",
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 999,
    },
    itemDetails: {
        width: "40%",
    },
    container: {
        height: 65,
    },
    statusItem: {
        height: 25,
        borderRadius: 23,
        backgroundColor: "#38b000",
        width:60,
    },
    statusText:{
        fontSize:8
    },
    text1:{
        fontSize:12,
        fontWeight:"bold"
    },
    text2:{
        fontSize:10
    },
    text3:{
        fontSize:9
    },
    divider:{
        borderWidth:0.5,
        borderColor:"black",
        margin: 10,
    }
});

export default Appointments;
