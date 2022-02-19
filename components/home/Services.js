import { View, Text, StyleSheet } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons"

const Services = () => {
    return (
        <View style={tw`mt-2 px-4`} >
            {/* Section Title */}
            <Text style={[tw`font-bold text-lg`, styles.headerText]} >Services</Text>
            {/* Container of Items */}
            <View style={tw`flex flex-row justify-between items-center mt-3`} >
                <Item text="Medicine Order" Icon={<Foundation color={"white"} name="pencil" size={24} />} bgColor={"#e5989b"} />
                <Item text="Medicine Reminder" Icon={<MaterialCommunityIcons color={"white"} name="reminder" size={24} />} bgColor={"#2a9d8f"} />
                <Item text="Call Ambulance" Icon={<MaterialCommunityIcons color={"white"} name="ambulance" size={24} />} bgColor={"#f4a261"} />
                <Item text="Oxygen Delivery" Icon={<MaterialCommunityIcons name="gas-cylinder" color={"white"} size={24} />} bgColor={"#0085ff"} />
            </View>
        </View>
    );
};


const Item = ({ text, Icon, bgColor }) => {
    return (
        <View style={styles.container} >
            {/* Sqaure box with icon */}
            <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
                {/* Icon */}
                {Icon}
            </View>
            {/* Text */}
            <Text style={styles.iconText} >{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        color: "#264653",
        fontSize: 17,
    },
    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18
    },
    iconText: {
        fontSize: 12,
        width: "100%",
        textAlign: "center",
        marginTop: 2
    },
    container: {
        width: 55,

    }
})

export default Services;
