import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <Text style={styles.Text}>1</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.Text}>2</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.Text}>3</Text>
      </View>
     
      
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
