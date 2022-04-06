import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function Question({ navigation }) {
    const [successes, setSucesses] = useState(0);
    const [numberQuestion, setNumberQuestion] = useState(1);
    const [qtdQuestion, setQtdQuestion] = useState(-5);
    const [disable, setDisable] = useState(false);
    const [stateAlternative, setStateAlternative] = useState();
    const [colorComp, setColorComp] = useState()

    const back = [
        {
            question: "Pergunta 1",
            alternatives: [{ alternative: "Oi", isTrue: true }, { alternative: "alternative2" }, { alternative: "alternative3" }, { alternative: "alternative4" }],
        },
        {
            question: "Pergunta 2",
            alternatives: [{ alternative: "Alternative1", isTrue: true }, { alternative: "alternative2" }, { alternative: "alternative3" }, { alternative: "alternative4" }],
        },
        {
            question: "Pergunta 3",
            alternatives: [{ alternative: "Alternative1", isTrue: true }, { alternative: "alternative2" }, { alternative: "alternative3" }, { alternative: "alternative4" }],
        },
        {
            question: "Pergunta 4",
            alternatives: [{ alternative: "Alternative1", isTrue: true }, { alternative: "alternative2" }, { alternative: "alternative3" }, { alternative: "alternative4" }],
        },
        {
            question: "Pergunta 5",
            alternatives: [{ alternative: "Ola", isTrue: true }, { alternative: "alternative2" }, { alternative: "alternative3" }, { alternative: "alternative4" }],
        }

    ]

    function verifySucess(value, alternative) {
        setStateAlternative(alternative)
        setDisable(true)

        if (value) {
            setSucesses(successes + 1)
            setColorComp("#00FF00")
        }
        if (value == undefined) {
            setColorComp("#FF0000")
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
        <ImageBackground style={{ flex: 1 }} source={require('../view/src/assents/background_question.jpg')}>
            <View style={styles.container}>
                <View style={styles.menuBar}>
                    <LinearGradient style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#00c400", "#00FF00", "#F6FF00", "#00FF00", "#00c400"]}>
                        <TouchableOpacity disabled={disable} onPress={() => navigation.goBack()}>
                            <Icon name="arrow-left-thick" size={30} color="#FFF" />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', margin: 3, marginRight: 5 }}>
                            <Icon name="circle" size={27} color={colorComp !== "#00FF00" && colorComp !== "#FF0000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 1 && colorComp} />
                            <Icon name="circle" size={27} color={colorComp !== "#00FF00" && colorComp !== "#FF0000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 2 && colorComp} />
                            <Icon name="circle" size={27} color={colorComp !== "#00FF00" && colorComp !== "#FF0000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 3 && colorComp} />
                            <Icon name="circle" size={27} color={colorComp !== "#00FF00" && colorComp !== "#FF0000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 4 && colorComp} />
                            <Icon name="circle" size={27} color={colorComp !== "#00FF00" && colorComp !== "#FF0000" && colorComp !== "#FFF" ? "#FFF" : numberQuestion == 5 && colorComp} />
                        </View>
                    </LinearGradient>
                </View>
                {back.splice(qtdQuestion, 1).map((value, index) => {
                    return (
                        <View style={{ flex: 1 }} key={index}>
                            <Text style={styles.titleQuestion}>Questão {numberQuestion}</Text>
                            <Image style={styles.image} source={require('../view/src/assents/image1.jpg')} />
                            <Text style={styles.questionText}>{value.question}</Text>
                            <View style={styles.viewAlternative}>
                                {value.alternatives.map((values, index) => {
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity disabled={disable} style={[styles.buttonAlternative, stateAlternative === values.alternative && { backgroundColor: colorComp, borderColor: disable ? '#000' : "#FFF", borderWidth: 0.9 }]} activeOpacity={0.7} onPress={() => verifySucess(values.isTrue, values.alternative)}>
                                                <Text style={styles.textAlternative}>{values.alternative}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    )
                })}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleQuestion: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 15,
        color: '#000',
        fontFamily: 'VarelaRound-Regular'
    },
    questionText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        width: "90%",
        alignSelf: 'center',
        fontFamily: 'VarelaRound-Regular'
    },
    image: {
        width: "70%",
        resizeMode: 'contain',
        height: "35%",
        alignSelf: 'center'
    },
    buttonAlternative: {
        backgroundColor: '#FFF',
        width: 180,
        height: 110,
        borderRadius: 10,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAlternative: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'VarelaRound-Regular'
    },
    viewAlternative: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute',
        bottom: '5%',
        justifyContent: 'center'
    },
    menuBar: {
        flexDirection: 'row',
    },
    icon: {
        color: '#FFF'
    }
})