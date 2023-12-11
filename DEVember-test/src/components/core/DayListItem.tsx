import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";


type DayListItemProp = {
    day: number
};

export default function DayListItem({ day }: DayListItemProp) {

    return (
        <Link href={`days/day${day}`} asChild>
            <Pressable  style={styles.box} >
                <Text style={styles.text}>{day}</Text>
                
            </Pressable>
        </Link>
    )
}



const styles = StyleSheet.create({
    box: {
        backgroundColor: '#e8d3c2',
        flex: 1,
        aspectRatio: 1,

        borderWidth: StyleSheet.hairlineWidth, // deixar a borda fina
        borderColor: '#9b4521',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: '#9b4521',
        fontSize: 58,
        fontFamily: 'AmaticBold',

    }

});
