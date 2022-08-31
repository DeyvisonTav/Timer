import React from "react";
import { useState, useE} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Home() {
 const [img,setImg] = useState(require('../../assets/botao-play.png'))
 const [numero, setNumero] = useState(0)
 const [timer, setTimer] = useState(null)


 function play() {
  if ( img === require('../../assets/botao-play.png')) {
    setImg(require('../../assets/botao-de-pausa.png'))
  }else {
    setImg(require('../../assets/botao-play.png'))
  }
  if(timer!= null){
    clearInterval(timer)
    setTimer(null)
  }else{
    setTimer(setInterval(()=>{
      changeTime()
    },100))
  }
   
 

 }

 function stop() {
  setImg(require('../../assets/botao-play.png'))
  setNumero(0)
  clearInterval(timer)
  setTimer(null)
 }
function changeTime(){
setNumero((prevState=>{
  return prevState + 0.1
}
  ))
}
  
  return (
    <Animatable.View animation="fadeInDown" delay={300} style={styles.container}>
     
        
        <View >
           <View style={styles.bntContainer}>
           <TouchableOpacity 
           onPress={()=> play()}
           style={styles.btn}>
            <Text style={styles.btn}>
              <Image style={styles.btnImage} source={img} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=> stop()}
          style={styles.btn}>
          <Image style={styles.btnImage2} source={require('../../assets/stop.png')} />
          </TouchableOpacity>
           </View>
          
          <Image source={require('../../assets/cronometro.png')} style={styles.image} />
          <View style={styles.containerNumero}>
          <Text style={styles.textNumero}>{numero.toFixed(1)}</Text>

          </View>
          
        </View>
     
     
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
    backgroundColor: '#8AA5DD'
  },
  
  image: {
    width:300,
    height: 330,
  },
  btn:{
    
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 25 ,
    paddingRight: 40,
    paddingBottom:18
  },
  btnImage:{
    width:40,
    height:44,
    alignItems: "center",
    justifyContent: "center",
  },
  btnImage2:{
  
    width:40,
    height:39,
   alignItems: "center",
   justifyContent: "center",
  },
  bntContainer:{
    flexDirection:'row',
    alignItems: "center",
    justifyContent:'center'
    
  },
  containerNumero: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: "center",
  },
  textNumero:{
    fontSize: 60,
    fontWeight: 'bold',
  }
  
 
});