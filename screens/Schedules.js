import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import tw from "tailwind-react-native-classnames"
import { Feather } from "@expo/vector-icons";

const Schedules = () => {
    return (
        <View style={styles.container} >
            <View style={tw`px-5 mt-7 h-full`} >
                <Text style={styles.heading} >Schedule</Text>
                <View style={tw`flex flex-row items-center justify-evenly mt-3`} >
                    <TabItem text={"Upcoming"} active />
                    <TabItem text={"Past"} />
                    <TabItem text={"Cancelled"} />
                </View>
                {/* Appointments */}
                <ScrollView style={tw`mt-2 mb-2`} showsVerticalScrollIndicator={false} >
                    {[...Array(8)].map((_, i) => <UpcomingItem key={i} />)}
                </ScrollView>
            </View>
        </View>
    )
}


const TabItem = ({ text, active = false }) => (
    <View style={[styles.tabItem, { backgroundColor: active ? "#fb8500" : "#f8f9fa" }, !active && styles.tabItemBorder]}>
        <Text style={[styles.tabText, { color: active ? "white" : "#adb5bd" }]} >{text}</Text>
    </View>
)

const UpcomingItem = () => {
    return (
        <View style={styles.upcomingItem} >
            <View style={tw`flex flex-row items-start`} >
                {/* Doc Image, Name and spec */}
                <Image
                    source={{ uri: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2016/01/BE_female-doctor-natural-hair-shutterstock.jpg" }}
                    style={styles.upcomingImage}
                />
                <View style={tw`ml-3`} >
                    <Text style={styles.docText1} >
                        {/* Name */}
                        Dr. Krystal Jung
                    </Text>
                    <Text style={styles.docText2} >
                        {/* Speciality */}
                        Dematologist
                    </Text>
                </View>
            </View>
            <View style={tw`flex flex-row items-start`} >
                {/* Date and Time */}
                <View style={tw`flex flex-row items-center mr-2`} >
                    <Feather name="calendar" style={tw`mr-2`} size={12} />
                    <Text style={styles.upcomingText1}>Monday August 30, 2022</Text>
                </View>
                <View style={tw`flex flex-row items-center`} >
                    <Feather name="clock" style={tw`mr-2`} size={12} />
                    <Text style={styles.upcomingText1}>8:00 AM - 9:00AM</Text>
                </View>
            </View>
            <View style={styles.upcomingBtnContainer} >
                <UpcomingBtn text={"Cancel"} containerStyle={{ marginRight: 10 }} />
                <UpcomingBtn text={"Reschedule"} containerStyle={{ marginLeft: 10, backgroundColor: "#fb8500" }} textColor={"white"} />
            </View>
        </View>
    )
}

const UpcomingBtn = ({ text, containerStyle, textColor }) => (
    <View style={[styles.upcomingBtn, containerStyle]} >
        <Text style={{ color: textColor }} >{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f9fa",
        height: "100%",
    },
    heading: {
        fontSize: 22,
        fontWeight: "800",
        textAlign: "center",
    },
    tabItem: {
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        borderRadius: 12,
    },
    tabItemBorder: {
        borderWidth: 1,
        borderColor: "gray",
    },
    tabText: {
        fontSize: 12,
    },
    upcomingItem: {
        backgroundColor: "white",
        height: 160,
        width: "100%",
        borderRadius: 18,
        paddingHorizontal: 15,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginVertical:10,
    },
    upcomingImage: {
        width: 50,
        height: 50,
        borderRadius: 18,
    },
    docText1: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#023047",
        marginBottom: 8,
        marginTop: 3,
    },
    docText2: {
        fontSize: 13,
        color: "#8e9aaf"
    },
    upcomingText1: {
        fontSize: 10
    },
    upcomingBtn: {
        height: 36,
        width: 100,
        borderRadius: 18,
        backgroundColor: "#ced4da",
        justifyContent: "center",
        alignItems: "center"
    },
    upcomingBtnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default Schedules;