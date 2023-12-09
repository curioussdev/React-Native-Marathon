import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const days = [...Array(24)].map((value, index) => index + 1)  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12... 24];

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
        key={'#'}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => (
          <View style={styles.box} >
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
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
  },


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
    fontSize: 58
  }

});
