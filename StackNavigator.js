import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import HomeScreen from './screens/HomeScreen';
import DocScreen from './screens/DocScreen';
import DoctorProfile from './screens/DoctorProfile';
import Appointments from './screens/Appointments';
import Schedules from "./screens/Schedules"
import Doctors from "./screens/Doctors"
import MakeAppointment from "./screens/MakeAppointment"


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }} >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DocScreen" component={DocScreen} />
            <Stack.Screen name="Schedules" component={Schedules} />
            <Stack.Screen name="Doctors" component={Doctors} />
            <Stack.Screen name="MakeAppointment" component={MakeAppointment} />
            {/* <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
            <Stack.Screen name="Appointments" component={Appointments} /> */}
        </Stack.Navigator>
    )
}

export default StackNavigator;