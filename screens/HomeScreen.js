import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native"
import tw from "tailwind-react-native-classnames"
import { MaterialCommunityIcons, Feather, EvilIcons, FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["#ECE9E6", "#fff"]} style={{ flex: 1 }} >
                <View style={tw`px-4 pt-8 h-full`} >
                    {/* AppBar  */}
                    <View style={tw`flex flex-row justify-between items-start`} >
                        <View style={tw`flex-row`}>
                            {/* Avatar Image */}
                            <Image source={{ uri: "https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k=" }} style={styles.image} />
                            {/* Description */}
                            <View style={tw`ml-4`}>
                                <Text style={styles.appBarText1} >Welcome Back</Text>
                                <Text style={styles.appBarText2} >Paul Killerman</Text>
                            </View>
                        </View>
                        {/* Hamburger Icon */}
                        <View style={styles.appBarIcon} >
                            <MaterialCommunityIcons name="hamburger" size={24} />
                        </View>
                    </View>
                    {/* Search */}
                    <View style={[tw`my-5 p-2 bg-white`, styles.search]} >
                        <Feather name="search" size={18} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search Doctor ..."
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[3]} >
                        {/* Upcoming Schedule */}
                        <SectionTitle title={"Upcoming Schedules"} />
                        {/* Upcoming */}
                        <LinearGradient colors={["#667db6", "#0082c8", "#0082c8", "#667db6"]} style={styles.upcoming} >
                            <View style={tw`flex flex-row items-start`} >
                                {/* Doc Details */}
                                <Image
                                    source={{ uri: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2016/01/BE_female-doctor-natural-hair-shutterstock.jpg" }}
                                    style={styles.upcomingImage}
                                />
                                <View style={tw`ml-4`} >
                                    <Text style={styles.upcomingText1} >Dr. Krystal Jung</Text>
                                    <Text style={styles.upcomingText2} >Dematologist</Text>
                                </View>
                                <Text></Text>
                            </View>
                            {/* Upcoming Details */}
                            <View style={styles.upcomingDetailsContainer} >
                                {/* Icon */}
                                <EvilIcons name="clock" size={22} color={"white"} />
                                {/* Text */}
                                <Text style={styles.upcomingDetailsText} >Monday August 30, 2021 8AM - 9AM</Text>
                            </View>
                        </LinearGradient>
                        {/* Services */}
                        <View style={tw`flex-row items-center justify-between mt-3 mb-5`} >
                            {/* Icon1 */}
                            <ServiceItem text={"Drugs"} Icon={MaterialCommunityIcons} iconName={"pill"} />
                            <ServiceItem text={"Virus"} Icon={MaterialCommunityIcons} iconName="virus" />
                            <ServiceItem text={"Pyscho"} Icon={FontAwesome} iconName={"heartbeat"} />
                            <ServiceItem text={"Other"} Icon={MaterialCommunityIcons} iconName="shield-plus" />
                        </View>
                        {/* Doctors*/}
                        <SectionTitle title={"Find your doctor"} pushPage="Doctors" />
                        {[...Array(12)].map((_, i) => <DoctorItem key={i} />)}
                    </ScrollView>
                </View>
            </LinearGradient>
        </View>
    )
}

const SectionTitle = ({ title, pushPage = "HomeScreen" }) => {
    const navigation = useNavigation()
    return (
        <View style={[tw`flex flex-row justify-between items-center px-2`]}>
            {/* Text1 */}
            <Text style={styles.sectionText1}>{title}</Text>
            {/* Text2 */}
            <TouchableOpacity onPress={() => navigation.navigate(pushPage)}>
                <Text style={styles.sectionText2}>See all</Text>
            </TouchableOpacity>
        </View>
    );
}

const ServiceItem = ({ text, Icon, iconName }) => {
    return (
        <View style={tw`items-center`} >
            {/* Icon */}
            <View style={styles.serviceIconBackground} >
                <Icon name={iconName} size={35} color={"#64dfdf"} />
            </View>
            {/* Text */}
            <Text style={styles.serviceText} >{text}</Text>
        </View>
    )
}

const DoctorItem = () => {
    const navigation = useNavigation()
    return (
        <View style={tw`flex-row justify-between items-center my-2`} >
            <View style={tw`flex flex-row items-start`} >
                <Image
                    source={{ uri: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2016/01/BE_female-doctor-natural-hair-shutterstock.jpg" }}
                    style={styles.docImage}
                />
                <View style={tw`ml-3`} >
                    <Text style={styles.docText1}>Dr. Krystal Jung</Text>
                    <Text style={styles.docText2}>Dematologist</Text>
                </View>
            </View>
            {/* Icon */}
            <TouchableOpacity onPress={() => navigation.navigate('DocScreen')} >
                <MaterialIcons name={"arrow-forward-ios"} size={26} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 18,
    },
    appBarText1: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 4,
    },
    appBarText2: {
        fontSize: 14,
    },
    appBarIcon: {
        width: 40,
        height: 40,
        borderRadius: 18,
        backgroundColor: "#CFDEF3",
        justifyContent: "center",
        alignItems: "center",
    },
    search: {
        height: 40,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 23,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    searchInput: {
        width: "90%",
        paddingLeft: 6,
        fontSize: 14,
        color: "#6b705c"
    },
    sectionText1: {
        fontSize: 18,
        fontWeight: "bold",
    },
    sectionText2: {
        fontSize: 12,
        color: "#f72585",
    },
    upcoming: {
        borderRadius: 23,
        height: 150,
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 10,
    },
    upcomingImage: {
        height: 50,
        width: 50,
        borderRadius: 18,
    },
    upcomingText1: {
        fontSize: 17,
        fontWeight: "800",
        color: "#dee2e6",
        marginBottom: 4,
    },
    upcomingText2: {
        fontSize: 12,
        fontWeight: "200",
        color: "#e9ecef",
    },
    upcomingDetailsContainer: {
        backgroundColor: "#48cae4",
        borderRadius: 18,
        height: 40,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    upcomingDetailsText: {
        fontSize: 12,
        fontWeight: "300",
        color: "white",
    },
    serviceIconBackground: {
        backgroundColor: "#edf6f9",
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        borderRadius: 18,
    },
    serviceText: {
        fontSize: 11,
        fontWeight: "200",
        marginTop: 2
    },
    docImage: {
        height: 70,
        width: 70,
        borderRadius: 18,
    },
    docText1: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#023047",
        marginBottom: 10,
    },
    docText2: {
        fontSize: 13,
        color: "#8e9aaf"
    }
})


export default HomeScreen;