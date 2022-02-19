import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Feather } from "@expo/vector-icons"



const Search = () => {
    return (
        <View style={[tw`px-4 mt-4 w-full flex flex-row justify-between items-center mb-1`, { maxHeight: 40 }]} >
            <TextInput style={[tw`border-2 rounded-xl px-4`, { borderColor: "#6b705c", width: "80%", height:"80%" }]} placeholder='Search Doctor' />
            {/* Search Button */}
            <TouchableOpacity>
                <View style={styles.iconContainer} >
                    <Feather name="search" color={"#001219"} size={32} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer:{
        width: 45,
        height: 45,
        backgroundColor:"#e8e8e4",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:18
    },
})

export default Search;
