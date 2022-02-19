import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from './screens/HomeScreen';
import DocScreen from './screens/DocScreen';
import Doctors from "./screens/Doctors"
import MakeAppointment from "./screens/MakeAppointment"
import Schedules from "./screens/Schedules"
import { AntDesign, Feather } from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }} >
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name={"DocScreen"} component={DocScreen} />
            <Stack.Screen name={"Doctors"} component={Doctors} />
            <Stack.Screen name={"MakeAppointment"} component={MakeAppointment} />
        </Stack.Navigator>
    )
}

const ScheduleStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Schedules'} component={Schedules} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: "#fb8500",
                tabBarLabelStyle:{ fontSize:8 },
                tabBarShowLabel:false,
                tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15, height:40},
            }}
        >
            <Tab.Screen
                name={"Home"}
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="home"
                            color={color}
                            size={18}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={"Schedule"}
                component={ScheduleStack}
                options={{
                    tabBarLabel: 'Appointments',
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name="calendar"
                            color={color}
                            size={18}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigator;