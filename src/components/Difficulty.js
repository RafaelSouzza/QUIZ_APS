import React, { useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DiffiContext } from '../context/DifficultyContext';
import css from '../styles/styles';
let colors = "#00C400";
export default function Difficulty({ navigation }) {
    const {difficulty, setDifficulty} = useContext(DiffiContext);

    function levelDifficult(valor) {
        switch (valor) {
            case "Fácil":
                colors = "#00C400"
                break;
            case "Médio":
                colors = "#0045CF"
                break;
            case "Difícil":
                colors = "#C20000"
                break;
        }
        setDifficulty(valor)
        navigation.replace("Home")
    }
    return (
        <ImageBackground imageStyle={{resizeMode:"stretch"}} style={css.containerDifficulty} source={require('../assents/background_difficulty.jpg')}>
            <View style={css.viewDifficulty}>
                <Text style={css.titleModalDif}>DIFICULDADE ATUAL:</Text>
                <Text style={[css.infoDif, { color: colors }]}>{difficulty}</Text>
            <Text style={css.titleModal}>ESCOLHA:</Text>
            <TouchableOpacity style={css.buttonDifficulty} activeOpacity={0.9} onPress={() => levelDifficult("Fácil")}>
                <LinearGradient start={{ x: 0.8, y: 0 }} end={{ x: 0, y: 0 }} style={css.gradientDif} colors={["#00C400","#00FF00"]}>
                    <Text style={css.textButton}>FÁCIL</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={css.buttonDifficulty} activeOpacity={0.9} onPress={() => levelDifficult("Médio")}>
                <LinearGradient start={{ x: 0.8, y: 0 }} end={{ x: 0, y: 0 }} style={css.gradientDif} colors={["#0045CF","#007BFF"]}>
                    <Text style={css.textButton}>MÉDIO</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={css.buttonDifficulty} activeOpacity={0.9} onPress={() => levelDifficult("Difícil")}>
                <LinearGradient start={{ x: 0.8, y: 0 }} end={{ x: 0, y: 0 }} style={css.gradientDif} colors={["#C20000","#FF0000"]}>
                    <Text style={css.textButton}>DIFÍCIL</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
