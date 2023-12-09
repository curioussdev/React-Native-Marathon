import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const days = [1, 7, 5,4, 2];

export default function App() {

  return (
    <View style={styles.container}>

      <FlatList
        data={days}
        renderItem={({ item }) => (
          <View style={styles.box} >
            <Text style={styles.Text}>{item}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',

    gap: 10,
  },


  box: {
    backgroundColor: '#e8d3c2',
    width: 300,
    height: 300,

    borderWidth: StyleSheet.hairlineWidth, // deixar a borda fina
    borderColor: '#9b4521',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  },

  Text: {
    color: '#9b4521',
    fontSize: 58
  }

});
