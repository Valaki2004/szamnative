import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,Image, Text, TouchableHighlight, View } from 'react-native';
import { TextInput } from 'react-native';
 
function calcTriangleArea(base, height) {
  return base * height / 2;
}
 
export default function App() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');
  function startCalc() {
    let result = calcTriangleArea(base, height);
    setArea(result);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Háromszög területszámítás</Text>
     
      <Text style={styles.color}>Alap :</Text>
      <TextInput
      style={styles.input}
      onChangeText={base => setBase(base)}/>
      <Text style={styles.color}>Magasság :</Text>
      <TextInput
      style={styles.input}
      onChangeText={height => setHeight(height)}/>
       
      <TouchableHighlight
        style={styles.button}
        onPress={startCalc}>
        <Text style={styles.buttonText}>Számít</Text>
      </TouchableHighlight>
      <Text style={styles.color}>Terület :</Text>
      <TextInput
      style={styles.input}
      onChangeText={area => setArea(area)}
      value={area}/>
        <Image
        source={require("./assets/tiger-4.jpg")}
        style={{width: 200, height: 200, marginTop: 50 }}/>  
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(white,red,orange,green,blue,black)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'navy',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    marginBottom: 20
 
  },
  buttonText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  },
  input: {
    backgroundColor: 'white',
    height: 30,
    marginBottom: 20,
    borderRadius:5
  },
  color:{
    color:"white",
    fontSize:20
  },
  header:{
    color:"black",
    fontSize:35,
    marginBottom: 75,
    textAlign:"center"
  }
});