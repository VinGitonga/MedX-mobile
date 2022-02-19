import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native"
import tw from "tailwind-react-native-classnames"
import { MaterialIcons } from "@expo/vector-icons"
import { Calendar } from "react-native-calendars"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

const times = [
    "9:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "3:00PM",
]

const MakeAppointment = () => {
    const navigation = useNavigation()
    return (
        <View style={tw`px-4 pt-6 h-full`} >
            {/* Heading */}
            <View style={tw`flex-row justify-between items-center`} >
                {/* Icon */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" size={18} color={"blue"} />
                </TouchableOpacity>
                {/* Text */}
                <Text style={styles.headingText} >Make an Appointment</Text>
                <Text></Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                {/* Section Header */}
                <Text style={styles.sectionHeaderText} >Select Date</Text>
                {/* Calender */}
                <Calendar
                    // style={{ flex: 4, width:"100%", height: "60%" }}
                    current={'2022-02-14'}
                    style={{
                        //   borderWidth: 1,
                        //   borderColor: "gray",
                        height: 250,
                        width: "100%"
                    }}
                    minDate={"2022-01-01"}
                    maxDate={"2023-12-31"}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {
                        // navigation.navigate("AgendaPage", day);
                        console.log("selected day", day);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={"yyyy MMMM"}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={
                        (true,
                            (month) => {
                                console.log("month changed", month);
                            })
                    }
                    // Hide month navigation arrows. Default = false
                    hideArrows={false}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={(direction) => <MaterialIcons name="arrow-forward-ios" />}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={false}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={false}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={0}
                    // Hide day names. Default = false
                    //hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    //showWeekNumbers={false}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    //onPressArrowLeft={(subtractMonth) => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    //onPressArrowRight={(addMonth) => addMonth()}
                    // Disable left arrow. Default = false
                    disableArrowLeft={false}
                    // Disable right arrow. Default = false
                    disableArrowRight={false}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    //disableAllTouchEventsForDisabledDays={false}
                    // Replace default month and year title with custom one. the function receive a date as parameter.
                    //renderHeader={(date()) => {'m'}}

                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                    markedDates={{
                        "2022-02-16": {
                            periods: [
                                { startingDay: false, endingDay: true, color: "#5f9ea0" },
                                { startingDay: false, endingDay: true, color: "#ffa500" }
                            ]
                        },

                        "2022-02-20": {
                            periods: [
                                { startingDay: true, endingDay: false, color: "#ffa500" },
                                { color: "transparent" },
                                { startingDay: false, endingDay: false, color: "#f0e68c" }
                            ]
                        }
                    }}
                    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                    markingType="multi-period"
                />
                <View style={{ marginTop: "35%" }} >
                    <Text style={styles.sectionHeaderText} >Select Time</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                        {times.map((timeStamp, i) => <TimeItem key={i} timeStamp={timeStamp} />)}
                    </View>
                </View>
                <Text style={styles.sectionHeaderText} >Your Request</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.textInput}
                    placeholder={'Write description of your appointment'}
                />
                <LinearGradient colors={["#8e2de2", "#4a00e0"]} style={styles.confirmBtn} >
                    <Text style={[tw`m-auto`, styles.confirmText]} >Confirm</Text>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

const TimeItem = ({ timeStamp }) => (
    <View style={styles.timeItem} >
        <Text>{timeStamp}</Text>
    </View>
)



const styles = StyleSheet.create({
    headingText: {
        fontSize: 18,
        fontWeight: "800",
    },
    sectionHeaderText: {
        marginVertical: 15,
        fontSize: 17,
        fontWeight: "800",
        color: "#2a9d8f"
    },
    timeItem: {
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        borderRadius: 12,
        backgroundColor: "white",
        marginBottom: 10
    },
    textInput: {
        height: 130,
        textAlignVertical: "top",
        marginTop: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 18,
        marginBottom: 15,
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    confirmBtn: {
        width: "100%",
        height: 45,
        borderRadius: 23,
        marginVertical: 20,
    },
    confirmText:{
        fontSize:16,
        color:"white"
    }
})

export default MakeAppointment;