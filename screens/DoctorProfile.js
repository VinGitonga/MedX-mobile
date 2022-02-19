import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DoctorProfile = () => {
    const height = Dimensions.get("window").height;
    const navigation = useNavigation();
    return (
        <View style={tw`h-full`}>
            <LinearGradient
                colors={["#8e9eab", "#eef2f3"]}
                style={{ height: height * 0.3 }}
            >
                <View>
                    {/* Arrow thingy */}
                    <View style={tw`pl-4 mt-7`}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} />
                        </TouchableOpacity>
                    </View>
                    {/* Avatar of Doc Image */}
                    <View style={tw`px-4 mt-1 flex flex-row items-center justify-center`}>
                        <Image
                            source={{
                                uri: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                            }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </LinearGradient>
            <View style={[tw`bg-white h-full`, styles.container]}>
                {/* View with name and speciality */}
                <View style={tw`px-12`}>
                    <View
                        style={[styles.details, tw`flex justify-evenly items-center mt-1`]}
                    >
                        <Text style={styles.detailsText1}>Dr. Suzy Bae</Text>
                        <Text style={tw`text-gray-300`}>Cardiologist</Text>
                    </View>
                </View>
                {/* Available time */}
                <View style={tw`px-4 mt-4`}>
                    <Text style={styles.text2}>Available</Text>
                    <Text style={styles.text3}>9:00am - 5:00pm</Text>
                </View>
                {/* Description */}
                <View style={tw`px-4 mt-4`}>
                    <Text style={[styles.text2, tw`mb-2`]}>Doctor Details</Text>
                    <Text style={styles.text4}>
                        Dr. Suzy Bae is a Cardiologist Specialist doctor in Vagabond. She's
                        qualified in MBBS, MD (Nephology). Currently working in Vagabond
                        National Hospital.
                    </Text>
                </View>
                {/* Book an Appointment */}
                <View style={[tw`px-4`, { marginTop: height * 0.08 }]}>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <Text style={styles.text2}>Doctor Fees</Text>
                        <Text style={styles.text5}>Ksh 500</Text>
                    </View>
                </View>
                <View style={tw`px-4 mt-5`}>
                    <TouchableOpacity>
                        <View style={[tw`w-full`, styles.button]}>
                            <Text style={[tw`text-center m-auto`, { color: "#f8edeb" }]}>
                                Book an Appointment
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 120,
        borderRadius: 999,
    },
    details: {
        width: "100%",
        height: 60,
        backgroundColor: "#0085ff",
        borderRadius: 18,
    },
    detailsText1: {
        fontSize: 20,
        color: "#f8edeb",
    },
    text2: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#264653",
    },
    text3: {
        fontSize: 13,
        color: "#081c15",
    },
    container: {
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
    },
    text4: {
        fontSize: 15,
        color: "#4a4e69",
    },
    text5: {
        fontSize: 17,
        color: "#000814",
    },
    button: {
        backgroundColor: "#0085ff",
        height: 45,
        borderRadius: 23,
    },
});

export default DoctorProfile;
