import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>
      <LinearGradient style={styles.line} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#00c400", "#00ff00", "#00c400"]}>
      </LinearGradient>
      <TouchableOpacity style={styles.buttonStart} activeOpacity={0.9} onPress={() => navigation.navigate('Question')}>
        <Image style={styles.image} source={require("../view/src/assents/button_start.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { left: 15 }]} onPress={() => navigation.navigate('Difficulty')}>
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.gradientMain} colors={["#00c400", "#00ff00", "#00c400"]}>
          <Text style={styles.textButton}>Dificuldade</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { right: 15 }]} onPress={() => navigation.navigate('Tip')}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradientMain} colors={["#00c400", "#00ff00", "#00c400"]}>
          <Text style={styles.textButton}>Dica</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    position: "absolute",
    alignSelf: 'center',
    top: 100,
    color: "#00c400",
  },
  container: {
    flex: 1,
  },
  gradientMain: {
    backgroundColor: '#00c400',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    position: 'absolute',
    bottom: 15,
    width: "35%",
    
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20
  },
  image: {
    borderRadius: 100,
    width:"90%"
  },
  buttonStart: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: "45%",
    width:"40%"
  },
  line: {
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: '51%'
  },
  buttonDifficulty: {
    padding: 20,
    borderRadius: 5,
    margin: 10,
    width: 200
  },
})