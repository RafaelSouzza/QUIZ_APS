import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DiffiContext } from '../context/DifficultyContext';
import css from '../styles/styles'

export default function End({ navigation, route }) {
    const [phrase, setPhrase] = useState('');
    const { successes } = route.params;
    const {difficulty} = useContext(DiffiContext);
    useEffect(() => {
        switch (successes) {
            case 0:
                if (difficulty == "Difícil") {
                    setPhrase("Não foi dessa vez, boa sorte na próxima. Tente dar uma olhada nas Dicas.")
                }
                else {
                    setPhrase("Não foi dessa vez, boa sorte na próxima.")
                }
                break;
            case 1:
                if (difficulty == "Difícil") {
                    setPhrase("Poxa, não foi dessa vez. Não desista, que tal olhar as Dicas?")
                }
                else {
                    setPhrase("Poxa, não foi dessa vez. Não desista!")
                }
                break;
            case 2:
                if (difficulty == "Difícil") {
                    setPhrase("Quem sabe na próxima vez. Que tal revisar as Dicas.")
                }
                else {
                    setPhrase("Quem sabe na próxima vez.")
                }
                
                break;
            case 3:
                setPhrase("Você acertou metade. Continue tentando.")
                break;
            case 4:
                setPhrase("Essa foi por pouco. Continue assim.")
                break;
            case 5:
                if (difficulty == "Difícil") {
                    setPhrase("Parábens, você conseguiu finalizar o quiz sem errar nenhuma questão.")
                }
                else {
                    setPhrase("Uau, você acertou todas. Que tal aumentar a dificuldade. ")
                }
                break;
        }
    }, [])
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