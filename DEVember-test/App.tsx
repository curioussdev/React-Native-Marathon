import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import DayListItem from './src/components/core/DayListItem';

const days = [...Array(24)].map((value, index) => index + 1)  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12... 24];

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
        // key={'#'}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        />

      { /*days.map((day) => (
        <View style={styles.box} key={day}>
          <Text style={styles.Text}>{day}</Text>
        </View>
      ))*/}



      <StatusBar style='auto' />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
 gap: 10,
  }});
