import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import css from '../src/styles/styles'

export default function Question({ navigation }) {
    const [successes, setSucesses] = useState(0);
    const [numberQuestion, setNumberQuestion] = useState(1);
    const [qtdQuestion, setQtdQuestion] = useState(-5);
    const [disable, setDisable] = useState(false);
    const [stateAlternative, setStateAlternative] = useState();
    const [colorComp, setColorComp] = useState()

    const back = [
        {
            question: "Das opções abaixo, a que não representa um impacto ambiental é:",
            alternatives: [{ alternative: "Chuva ácida" }, { alternative: "Assoreamento dos rios" }, { alternative: "Desertificação" }, { alternative: "Mobilidade urbana", isCorrect: true }],
        },
        {
            question: "As mudanças climáticas são um dos principais problemas ambientais do mundo que tem afetado grande parte da população de pessoas, de animais e de plantas.Esse problema traz diversas consequências negativas para o meio ambiente, da qual se destaca:",
            alternatives: [{ alternative: "Aumento da temperatura do globo terrestre", isCorrect: true }, { alternative: "Diminuição dos níveis dos oceanos" }, { alternative: "Aumento da urbanização" }, { alternative: "Crescimento da industrialização" }],
        },
        {
            question: "O _________ é um dos principais problemas ambientais no Brasil que acontece desde a chegada dos portugueses em 1500. Das alternativas abaixo, a que preenche corretamente a lacuna é:",
            alternatives: [{ alternative: " Assoreamento" }, { alternative: "Efeito estufa" }, { alternative: "Desmatamento", isCorrect: true }, { alternative: "Empobrecimento do solo" }],
        },
        {
            question: "Em 19 de agosto de 2019, moradores de São Paulo ficaram assustados com o final da tarde que escureceu grande parte da cidade. Esse fenômeno foi resultado das queimadas que aconteceram na região amazônica. Sobre as queimadas, é incorreto afirmar:",
            alternatives: [{ alternative: "Uma das consequências das queimadas é a mudança da temperatura e umidade do solo." }, { alternative: "As queimadas somente acontecem de maneira intencional, ou seja, por pessoas que provocam os incêndios.", isCorrect: true }, { alternative: "As queimadas intensificam o efeito estufa e o aquecimento global." }, { alternative: "Diversas práticas agrícolas estão relacionadas com as causas das queimadas." }],
        },
        {
            question: "As ilhas de calor representam um dos problemas ambientais urbanos. Esse fenômeno climático acontece devido:",
            alternatives: [{ alternative: "Ao aumento das queimadas nas zonas rurais", isCorrect: true }, { alternative: "A diminuição da densidade demográfica dos centros urbanos" }, { alternative: "Ao aumento da inversão térmica nas cidades" }, { alternative: "A elevação das temperaturas em algumas zonas urbanas", isCorrect: true }],
        }

    ]

    function verifySucess(value, alternative) {
        setStateAlternative(alternative)
        setDisable(true)

        if (value) {
            setSucesses(successes + 1)
            setColorComp("#4EB500")
        }
        if (value == undefined) {
            setColorComp("#B50000")
        }
        setTimeout(() => {
            if (numberQuestion !== 5) {
                setNumberQuestion(numberQuestion + 1)
                setColorComp("#FFF")
            }
            setQtdQuestion(qtdQuestion + 1)
            setDisable(false)
        }, 2000)

    }


    useEffect(() => {
        if (qtdQuestion == 0) {
            setQtdQuestion(qtdQuestion - 1)
            setDisable(true)
            navigation.replace('End', {
                successes: successes
            })

        }
    }, [qtdQuestion])

    return (
        <ImageBackground imageStyle={{ resizeMode: "stretch" }} style={css.container} source={require('../src/assents/background_question.jpg')}>
            <View style={css.menuBar}>
                <LinearGradient style={css.gradientQuestion} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#00c400", "#00FF00", "#F6FF00", "#00FF00", "#00c400"]}>
                    <TouchableOpacity disabled={disable} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left-thick" size={35} color="#FFF" />
                    </TouchableOpacity>
                    <View style={css.viewIcon}>
                        <Icon name="circle" size={33} color={colorComp !== "#4EB500" && colorComp !== "#B50000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 1 && colorComp} />
                        <Icon name="circle" size={33} color={colorComp !== "#4EB500" && colorComp !== "#B50000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 2 && colorComp} />
                        <Icon name="circle" size={33} color={colorComp !== "#4EB500" && colorComp !== "#B50000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 3 && colorComp} />
                        <Icon name="circle" size={33} color={colorComp !== "#4EB500" && colorComp !== "#B50000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 4 && colorComp} />
                        <Icon name="circle" size={33} color={colorComp !== "#4EB500" && colorComp !== "#B50000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 5 && colorComp} />
                    </View>
                </LinearGradient>
            </View>
            {back.splice(qtdQuestion, 1).map((value, index) => {
                return (
                    <View style={css.container} key={index}>
                        <Text adjustsFontSizeToFit style={css.titleQuestion}>Questão {numberQuestion}</Text>
                        <Image style={css.image} source={require('../src/assents/image1.jpg')} />
                        <Text numberOfLines={6} adjustsFontSizeToFit style={css.questionText}>{value.question}</Text>
                        <View style={css.viewAlternative}>
                            {value.alternatives.map((values, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity disabled={disable} style={[css.buttonAlternative, stateAlternative === values.alternative && { backgroundColor: colorComp, borderColor: disable ? '#2A6000' : "#FFF", borderWidth: 1 }]} activeOpacity={0.7} onPress={() => verifySucess(values.isCorrect, values.alternative)}>
                                            <Text numberOfLines={4} adjustsFontSizeToFit style={css.textAlternative}>{values.alternative}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                )
            })}
        </ImageBackground>
    )
}