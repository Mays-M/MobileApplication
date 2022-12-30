import { StatusBar } from 'expo-status-bar';
import react,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, Keyboard } from 'react-native';

export default function App() {
  const [number1 , setNumer1]=useState('0');
  const [number2 , setNumer2]=useState('0');
  const [result , setResult]=useState('0');
  const buttonPressed=(e,calc) =>{
    if(calc === '+') setResult(parseInt(number1) + parseInt(number2)+"");
    else if(calc === '+-') setResult(parseInt(number1) - parseInt(number2)+"");
    else if(calc === '*') setResult(parseInt(number1) * parseInt(number2)+"");
    else if(calc === '/') setResult(parseInt(number1) / parseInt(number2)+"");
    Keyboard.dismiss();

    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.calculator}>calculator</Text>
      <StatusBar style="auto" />
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 1:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput value={number1} onChange={text => setNumber1(text)} 
          keyboardType={'numeric'} style={{textAligin:'right'}}></TextInput>
      </View>
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
        <Text>Number 2:</Text>
      </View>
      <View style={styles.textInput}>
         <TextInput value ={number2} onChange={text => setNumer2(text)} 
         keyboardType={'numeric'} style={{textAlign:'right'}} ></TextInput>
      </View>
      </View>
      <View style={styles.buttonRow}>
        <Button title =" + " onPress={(e) => buttonPressed(e,'+')}/>
        <Button title =" - " onPress={(e) => buttonPressed(e,'-')}/>
        <Button title =" * " onPress={(e) => buttonPressed(e,'*')}/>
        <Button title =" / " onPress={(e) => buttonPressed(e,'/')}/>
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Result: </Text>
        </View>
        <View style={styles.textInput}>
          <TextInput value={result} style={{textAlign:'right'}}
          edittable={flase}></TextInput>
          </View>
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
  },
  calculator:{
    fontSize:50,
    fontWeight:'blod',
    marginBottom:20
  },
  row:{
    flexDirection:'row',
    marginTop:5
  
  },
  text:{
    backgroundColor:'lightgry',
    justifyContent:'center',
    padding:5,
    width:100,
  },
  textInput:{
    justifyContent:'center',
    padding:5,
    borderBottomWidth:1.0,
    width:100,
    marginLeft: 5,
  },
  buttonRow:{
    flexDirection:'row',
    marginTop:20,
    marginBottom20,
    justifyContent :'space-around',
    width:220,
  },
});
