import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import css from '../styles/styles'

export default function Home({ navigation }) {
  return (
    <View style={css.container}>
      <Text style={css.titleMain}>Eco Quiz</Text>
      <View style={css.viewLine}>
        <LinearGradient style={css.line} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#00c400", "#00ff00", "#00c400"]}>
        </LinearGradient>
        <TouchableOpacity style={css.buttonStart} activeOpacity={0.9} onPress={() => navigation.navigate('Question')}>
          <Image style={css.imageStart} source={require("../assents/button_start.png")} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[css.button, { left: 15 }]} onPress={() => navigation.navigate('Difficulty')}>
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={css.gradientMain} colors={["#00c400", "#00ff00", "#00c400"]}>
          <Text style={css.textButton}>Dificuldade</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={[css.button, { right: 15 }]} onPress={() => navigation.navigate('Tip')}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={css.gradientMain} colors={["#00c400", "#00ff00", "#00c400"]}>
          <Text style={css.textButton}>Dica</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}