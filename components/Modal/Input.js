import {React, useEffect, useState} from 'react'
import { styles } from './InputCSS'
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Input(props) {
  const[modalVisible,setVisible] = useState(true);
  const[hour, setHour] = useState(0);
  const[minute, setMinute] = useState(0);
  const[second, setSecond] = useState(0);

  function submitPressed(){
    let newGameData = [true];
    let TotSec = (hour*3600 )+ (minute*60) + (second*1);
    newGameData.push(TotSec);
    props.setGameData([...newGameData]);
    props.setWinner(2);
    setVisible(false);
  }



  return (
    <Modal 
        transparent={true}
        visible={modalVisible || (props.winner!=2)}
        animationType='slide'
        style={{flex:1}}
      >
        <View style={styles.modalContainer}>

        <View style={styles.titleContainer}>
          {(props.winner!=2) && <Text style={{fontWeight:'bold'}}>The winner is {(props.winner==0) ? "White" : "Black"}</Text>}
        <Text>Enter time in HH : MM : SS</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder='HH' onChangeText={(Hour) => setHour(Hour)}/>
            <TextInput placeholder='MM' onChangeText={(Minutes) => setMinute(Minutes)} />
            <TextInput placeholder='SS' onChangeText={(Seconds) => setSecond(Seconds)}/>
          </View>
          <TouchableOpacity 
            onPress={submitPressed}
            style={styles.modalContent}
            >
            <Text >Submit</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
  )
}
