import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var colors = "#00C400";
export default function Difficulty({ navigation }) {
    const [difficulty, setDifficulty] = useState("Fácil");
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
        navigation.navigate("Home")
    }
    return (
        <ImageBackground style={styles.containerModal} source={require('../view/src/assents/background_difficulty.jpg')}>
            <View style={{ position: 'absolute', top: 30,alignItems:'center' }}>
                <Text style={styles.titleModalDif}>DIFICULDADE ATUAL:</Text>
                <Text style={[styles.infoDif, { color: colors }]}>{difficulty}</Text>
            <Text style={styles.titleModal}>ESCOLHA:</Text>
            <TouchableOpacity style={{width:"80%"}} activeOpacity={0.9} onPress={() => levelDifficult("Fácil")}>
                <LinearGradient start={{ x: 0.8, y: 0 }} end={{ x: 0, y: 0 }} style={styles.gradientDif} colors={["#00C400","#00FF00"]}>
                    <Text style={styles.textButtonDifficulty}>FÁCIL</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"80%"}} activeOpacity={0.9} onPress={() => levelDifficult("Médio")}>
                <LinearGradient start={{ x: 0.8, y: 0 }} end={{ x: 0, y: 0 }} style={styles.gradientDif} colors={["#0045CF","#007BFF"]}>
                    <Text style={styles.textButtonDifficulty}>MÉDIO</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"80%"}} activeOpacity={0.9} onPress={() => levelDifficult("Difícil")}>
                <LinearGradient start={{ x: 0.8, y: 0 }} end={{ x: 0, y: 0 }} style={styles.gradientDif} colors={["#C20000","#FF0000"]}>
                    <Text style={styles.textButtonDifficulty}>DIFÍCIL</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    containerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleModalDif: {
        fontSize: 28,
        textAlign: "center",
        marginBottom: 30,
        fontWeight:'bold',
        color:"#95A5A6"
    },
    infoDif: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
    },
    titleModal: {
        fontSize: 28,
        textAlign: "center",
        marginTop:"20%",
        marginBottom: 30,
        color:"#95A5A6"
    },
    gradientDif: {
        padding: 25,
        borderRadius: 5,
        margin: 10,
    },
    textButtonDifficulty: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})