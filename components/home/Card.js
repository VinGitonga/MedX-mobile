import { View, Text, StyleSheet, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";

const Card = () => {
    return (
        <View style={[tw`px-4 mt-6`]} >
            <View style={[tw`flex flex-row justify-between`, styles.container]} >
                <View style={[tw`py-2 pl-4`, styles.textContainer]}>
                    <Text style={tw`font-bold text-white text-xl`} >
                        Oxygen Supply
                    </Text>
                    <Text style={tw`w-40 text-white text-xs`}>
                        Get oxygen cylinder at home
                        by Order Online
                    </Text>
                    <View style={tw`w-24 h-10 rounded-3xl bg-white`} >
                        <Text style={[tw`text-center m-auto`, {color: "#0085ff",}]} >Order Now</Text>
                    </View>
                </View>
                <Image source={{ uri: "https://image.freepik.com/free-vector/person-carrying-tank-fresh-air_53876-43955.jpg" }} style={[tw`w-24 h-32 rounded-2xl mr-auto my-auto`, styles.image]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        backgroundColor: "#0085ff",
        borderRadius: 18,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    image:{
        paddingVertical: 2,
        paddingHorizontal: 3,
    }
})

export default Card;
