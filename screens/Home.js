import { View, ScrollView, Dimensions } from 'react-native';
import Card from '../components/home/Card';
import Doctor from '../components/home/Doctor';
import Header from '../components/home/Header';
import Search from '../components/home/Search';
import Services from '../components/home/Services';
import Specialists from '../components/home/Specialists';

const Home = () => {
    const height = Dimensions.get('window').height;
    return (
        <View style={{ height: height }} >
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Search />
                <Card />
                <Specialists />
                <Services />
                <Doctor />
            </ScrollView>
        </View>
    );
};

export default Home;
