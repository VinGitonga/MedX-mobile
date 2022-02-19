import { View, Text,Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Header = () => {
    return (
        <View style={tw`px-4 pt-9`} >
            <View style={tw`flex flex-row justify-between items-start`}>
                {/* Description */}
                <View >
                    <Text style={tw`text-gray-900 text-lg font-bold mb-1`}>Hello Safayed</Text>
                    <Text style={tw`text-gray-400 text-sm`} >Find your specialist here</Text>
                </View>
                {/*Square Avatar */}
                <View>
                    <Image source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg" }} style={tw`h-12 w-12 rounded-full`} />
                </View>
            </View>
        </View>
    );
};

export default Header;
