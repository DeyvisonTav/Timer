import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={250}
          animation="flipInY"
          source={require('../../assets/cronom.png')}
          style={{ width: '85%', height: '65%' , shadowColor: 'black', shadowOffset:100 }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={700}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
           Crononômetro
        </Text>
        <Text style={styles.text}> Aperte para iniciar a contagem!</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AA5DD'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#8AA5DD',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    
   borderColor: '#fff',
    borderTopWidth: 2,
    borderRightWidth: 1.6,
    borderLeftWidth: 1.6,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#3A76F7'
  },
  text: {
    fontSize: 18,
    color: '#3A76F7'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#3A76F7',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})