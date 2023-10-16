import React, { useState,useEffect } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, SectionListComponent, ToastAndroid} from 'react-native';

export default function Black(props) {
  const[second, setSecond] = useState(0);
  const[minute, setMinute] = useState(0);
  const[hour, setHour] = useState(0);
  const[totalSec,setTotalSec] = useState(0);

  function setTime(totalseconds){
    setHour(Math.floor(totalseconds/3600));
    let rem = Math.floor(totalseconds - Math.floor((totalseconds/3600))*3600);
    setMinute(Math.floor(rem/60));
    rem = Math.floor(rem - Math.floor((rem/60))*60);
    setSecond(rem);
  }

  useEffect(()=>{
    if(props.gameData[0]){
      setTime(props.gameData[1]);
      setTotalSec(props.gameData[1]);
    }
  },[props.gameData[0]]);

  useEffect(()=>{
    let timer;
    if(props.gameData[0] && (props.chance)){
      timer = setTimeout(() => {
        if(totalSec == 0 ){
          setTime(totalSec);
          props.setWinner(0);
          clearTimeout(timer);
          let newGameData = [false];
          newGameData.push(props.gameData[1]);
          props.setGameData([...newGameData]);
          props.setChance(0);
          return;
        }
        setTotalSec(totalSec-1);
        setTime(totalSec);
        }, 1000);
    }
    if(props.chance == 0){
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  },[totalSec,props.gameData[0],props.chance])

  function tapped(){
    props.setChance(0);
  }

  return (
    <View>
      <TouchableOpacity style={{backgroundColor: props.bg ,height: '100%'}}
        onPress={tapped}
      >
      <View style={{display:'flex',justifyContent:'center', alignItems:'center',flex:1}}>
        <Text style={{color:'white',fontSize:70}}>{hour}:{minute}:{second} </Text>
      </View>
      
      </TouchableOpacity>
    </View>
  )
}
