import React, { useEffect, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Input from './components/Modal/Input';
import Clock from './components/Clock/Clock';
import Black from './components/Clock/Black/Black';

function App(){
  const[gameData, setGameData] = useState([false,0]);
  const[chance,setChance] = useState(0);
  const[winner,setWinner] = useState(2);


  return (
    <View style={styles.container}>
      <View style={styles.half}>
        <Clock gameData={gameData} setGameData={setGameData} bg={"white"} chance={chance} setChance={setChance} setWinner={setWinner}/>
      </View>

      <Input setGameData={setGameData} winner={winner} setWinner={setWinner}/>

      <View style={styles.half}>
        <Black gameData={gameData} setGameData={setGameData} bg={"black"} chance={chance} setChance={setChance} setWinner={setWinner}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
  },
  half: {
    flex: 1, 
  },
});

export default App;



