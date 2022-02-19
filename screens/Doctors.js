import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons, Feather, Fontisto, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native"

const Doctors = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={tw`px-4 pt-6 h-full`}>
                {/* Header Section */}
                <View style={tw`flex flex-row justify-between items-center`} >
                    {/* Icon */}
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <MaterialIcons name="arrow-back-ios" size={20} color={"#0096c7"} />
                    </TouchableOpacity>
                    {/* Title */}
                    <Text style={styles.topbarText} >Choose Doctor</Text>
                    <Text></Text>
                </View>
                {/* Search */}
                <View style={[tw`my-5 p-2 bg-white`, styles.search]} >
                    <Feather name="search" size={18} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Doctor ..."
                    />
                </View>
                {/* Filters */}
                <View style={tw`flex-row items-center justify-between mt-2`}>
                    <SpecilityItem text={"Pharmacist"} Icon={Fontisto} iconName={"pills"} />
                    <SpecilityItem text={"Vaccine"} Icon={Fontisto} iconName={"injection-syringe"} />
                    <SpecilityItem text={"Cardiac"} Icon={FontAwesome} iconName={"heartbeat"} />
                    <SpecilityItem text={"Dentist"} Icon={MaterialCommunityIcons} iconName={"microscope"} />
                </View>
                {/* Doctors */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {[...Array(8)].map((_, i) => <DoctorItem key={i} />)}
                </ScrollView>
            </View>
        </View>
    )
}

const SpecilityItem = ({ text, Icon, iconName }) => {
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
        backgroundColor: "#f8f9fa",
    },
    topbarText: {
        fontSize: 18,
        fontWeight: "800",
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

export default Doctors