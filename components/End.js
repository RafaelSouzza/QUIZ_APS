import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function End({ navigation, route }) {
    const [phrase, setPhrase] = useState('')
    const { successes } = route.params
    useEffect(()=>{
        switch (successes) {
            case 0:
                setPhrase("Não foi dessa vez, boa sorte na próxima. Tente dar uma olhada nas Dicas.")
                break;
            case 1:
                setPhrase("Poxa, não foi dessa vez. Não desista e que tal olhar as Dicas.")
                break;
            case 2:
                setPhrase("Quem sabe na próxima vez. Que tal revisar as Dicas.")
                break;
            case 3:
                setPhrase("Você acertou metade. Continue tentando.")
                break;
            case 4:
                setPhrase("Essa foi por pouco. Continue assim.")
                break;
            case 5:
                setPhrase("Uau, você acertou todas. Que tal aumentar a dificuldade. ")
                break;
        }
    },[])
    return (
        <LinearGradient style={styles.container} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={["#00c400", "#00FF00"]}>
            <View style={{ position: 'absolute', top: "20%", alignSelf: 'center' }}>
                <Text style={[styles.text, { marginTop: 0 }]}>Você acertou:</Text>
                <Text style={styles.text}>{successes}/5</Text>
                <Text style={styles.phrase}>{phrase}</Text>
            </View>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.replace('Home')}>
                <Text style={styles.textButton}>Voltar ao menu</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "#FFF",
        fontSize: 40,
        alignSelf: 'center',
        fontFamily: 'BIZUDPMincho-Regular',
        marginTop: 30
    },
    buttonBack: {
        backgroundColor: "#FFF",
        width: 250,
        height: 90,
        borderRadius: 10,
        padding: 20,
        position: "absolute",
        bottom: "10%",
        alignSelf: "center",
        justifyContent: 'center'
    },
    textButton: {
        textAlign: "center",
        color: "#00c400",
        fontSize: 20,
        fontWeight:'bold'
    },
    phrase: {
        color: "#FFF",
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'BIZUDPMincho-Regular',
        marginTop: 35,
        margin: 10,
    }
})