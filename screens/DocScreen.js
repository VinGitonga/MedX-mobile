import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from "react-native"
import tw from "tailwind-react-native-classnames"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

const DocScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={[tw`px-3 pt-6`, styles.container]} >
            <ImageBackground
                source={{ uri: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2016/01/BE_female-doctor-natural-hair-shutterstock.jpg" }}
                style={styles.imageBackground}
                resizeMode={"cover"}
                imageStyle={{ borderRadius: 23 }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons style={styles.backIcon} name="arrow-back-ios" size={23} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={tw`my-2`} >
                <Text style={styles.text1} >Dr. Krystal Jung</Text>
                <Text style={styles.text2} >Dematologist</Text>
            </View>
            <View>
                <Text style={styles.header1} >
                    Biography
                </Text>
                <Text style={[tw`text-gray-500 mt-2`, styles.bioText]} >
                    Doctors are always the hero and hopes of the patients. Medicine can treat diseases but doctors can treat a patient.
                    Never stop, you can always become someone's life saver.
                    The great doctors provide less medicine. #greatdoctors
                </Text>
            </View>
            <View style={tw`mt-3`} >
                <Text style={styles.header1} >
                    Location
                </Text>
            </View>
            <View style={tw`flex flex-row items-start mt-3`} >
                <Image
                    source={{ uri: "https://i.stack.imgur.com/hmMoU.jpg" }}
                    style={styles.locImage}
                />
                <View style={tw`ml-4 flex mt-3`} >
                    <Text style={[tw`mb-4`, styles.textAddress]} >
                        {/* Address */}
                        Nairobi Hospital, Kenya
                    </Text>
                    <View style={tw`flex-row`} >
                        {/* View map text */}
                        <Text style={styles.textViewmap} >View Map</Text>
                        {/* Arrow Icon */}
                        <Ionicons name={"md-arrow-forward"} size={17} />
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() =>navigation.navigate("MakeAppointment")} >
                <LinearGradient colors={["#8e2de2", "#4a00e0"]} style={styles.appointmentBtn} >
                    <Text style={[tw`m-auto`, styles.text3]} >Make Appointment</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fbfbf2",
        height: "100%",
    },
    imageBackground: {
        height: 200,
        width: "100%",
    },
    backIcon: {
        marginLeft: 8,
        marginTop: 8
    },
    text1: {
        fontSize: 20,
        fontWeight: "800",
        color: "#023047",
        marginBottom: 5
    },
    text2: {
        fontSize: 14,
        fontWeight: "200",
        color: "#8e9aaf"
    },
    header1: {
        fontSize: 18,
        fontWeight: "800",
    },
    bioText: {
        fontSize: 12,
    },
    locImage: {
        height: 70,
        width: 70,
        borderRadius: 22,
    },
    textAddress: {
        fontSize: 13,
    },
    textViewmap: {
        fontSize: 12,
        marginRight: 4,
    },
    appointmentBtn: {
        width: "100%",
        height: 45,
        borderRadius: 23,
        marginVertical: 25,
    },
    text3: {
        fontSize: 16,
        color: "white"
    }
})


export default DocScreen;