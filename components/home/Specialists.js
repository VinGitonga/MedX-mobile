import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Specialists = () => {
    return (
        <View style={tw`mt-6 px-4`} >
            {/* Header Section */}
            <View style={styles.headerContainer} >
                <Text style={[tw`font-bold text-lg`, styles.headerTitle]} >Specialists</Text>
                <Text style={styles.linkText} >See all</Text>
            </View>
            {/* Row of varous specializations */}
            <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false} horizontal>
                {[...Array(5)].map((_, i) => <Item key={i} />)}
            </ScrollView>
        </View>
    );
};

const Item = () => {
    return (
        <View style={[tw`flex flex-row justify-evenly items-center`, styles.itemContainer]} >
            {/* Icon/Image */}
            <Image style={tw`w-5 h-5 rounded-full`} source={{ uri:"https://pbs.twimg.com/profile_images/1260937097206087681/PO6BSMCI_400x400.jpg" }} />
            {/* Text */}
            <Text style={styles.itemText}>Cardiologist</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle:{
        color: "#264653",
        fontSize: 17,
    },
    linkText:{
        color:"#3f37c9",
        fontSize: 13,
    },
    headerContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    scrollContainer:{
        marginVertical: 8,
    },
    itemContainer:{
        width: 100,
        backgroundColor:"#f7fbff",
        borderRadius: 18,
        marginRight: 5,
    },
    itemText:{
        fontSize:12,
        color:"#1b4332",
    }
})

export default Specialists;
