import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Doctor = () => {
    const width = Dimensions.get("window").width;
    return (
        <View style={tw`px-4 mt-6`}>
            <View style={styles.headerContainer}>
                <Text style={[tw`font-bold text-lg`, styles.headerTitle]}>
                    Available Doctors
                </Text>
                <Text style={styles.linkText}>See all</Text>
            </View>
            <ScrollView
                style={styles.scrollContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {[...Array(5)].map((_, i) => (
                    <Item key={i} width={width} />
                ))}
            </ScrollView>
            <Text></Text>
        </View>
    );
};

const Item = ({ width }) => {
    const navigation = useNavigation();
    return (
        <View style={{ width: width * 0.35, marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("DoctorProfile")}>
                {/* Image */}
                <Image
                    source={{
                        uri: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    }}
                    style={[tw`w-full rounded-xl`, styles.itemImage]}
                />
                {/* Name */}
                <Text style={styles.text1}>Dr. Suzy Bae</Text>
                {/* Specilization */}
                <Text style={styles.text2}>Cardiologist</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        color: "#264653",
        fontSize: 17,
    },
    linkText: {
        color: "#3f37c9",
        fontSize: 13,
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemImage: {
        height: 100,
    },
    scrollContainer: {
        marginVertical: 8,
    },
    text1: {
        fontSize: 12,
        marginLeft: 5,
        fontWeight: "bold",
        color: "#212529",
    },
    text2: {
        fontSize: 10,
        marginLeft: 5,
        color: "#6c757d",
    },
});

export default Doctor;
