import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import css from '../src/styles/styles'

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
        <LinearGradient style={css.container} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={["#00c400", "#00FF00"]}>
            <View style={css.viewEnd}>
                <Text style={[css.text, { marginTop: 0 }]}>Você acertou:</Text>
                <Text style={css.text}>{successes}/5</Text>
                <Text style={css.phrase}>{phrase}</Text>
            </View>
            <TouchableOpacity style={css.buttonBackEnd} onPress={() => navigation.replace('Home')}>
                <Text style={css.textButtonEnd}>Voltar ao menu</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}