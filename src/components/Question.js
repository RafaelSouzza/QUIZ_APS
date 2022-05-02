import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import css from '../styles/styles'
import { DiffiContext } from '../context/DifficultyContext';
import { getQuestions } from '../api/api';
let questionNew = [];

export default function Question({ navigation }) {
    const [successes, setSucesses] = useState(0);
    const [numberQuestion, setNumberQuestion] = useState(1);
    const [disable, setDisable] = useState(false);
    const [stateAlternative, setStateAlternative] = useState();
    const [colorComp, setColorComp] = useState();
    const [reQuestions, setReQuestions] = useState([]);
    const [alternatives, setAlternatives] = useState([]);
    const [loanding, setLoanding] = useState(true);

    const { difficulty } = useContext(DiffiContext);

    const images = [
        {
            id: 1,
            directory: require("../assents/imageQuestion/Question1.jpg")
        },
        {
            id: 2,
            directory: require("../assents/imageQuestion/Question2.jpg")
        },
        {
            id: 3,
            directory: require("../assents/imageQuestion/Question3.jpg")
        },
        {
            id: 4,
            directory: require("../assents/imageQuestion/Question4.jpg")
        },
        {
            id: 5,
            directory: require("../assents/imageQuestion/Question5.jpg")
        },
        {
            id: 6,
            directory: require("../assents/imageQuestion/Question6.jpg")
        },
        {
            id: 7,
            directory: require("../assents/imageQuestion/Question7.jpg")
        },
        {
            id: 8,
            directory: require("../assents/imageQuestion/Question8.jpg")
        },
        {
            id: 9,
            directory: require("../assents/imageQuestion/Question9.jpg")
        },
        {
            id: 10,
            directory: require("../assents/imageQuestion/Question10.jpg")
        },
        {
            id: 11,
            directory: require("../assents/imageQuestion/Question11.jpg")
        },
        {
            id: 12,
            directory: require("../assents/imageQuestion/Question12.jpg")
        },
        {
            id: 13,
            directory: require("../assents/imageQuestion/Question13.jpg")
        },
        {
            id: 14,
            directory: require("../assents/imageQuestion/Question14.jpg")
        },
        {
            id: 15,
            directory: require("../assents/imageQuestion/Question15.jpg")
        },
    ] // Array com todos os caminhos das imagens utilizadas na parte de questões do aplicativo


    useEffect(() => { // Faz a requisição na API
        async function getApi() {
            await getQuestions()
                .then((response) => {
                    setReQuestions(response)
                    setLoanding(false)
                })
                .catch((error) => {
                    Alert.alert('Aviso', 'A conexão expirou, tente novamente!', [
                        {
                            text: "OK",
                            onPress: () => navigation.goBack()
                        }
                    ])
                })
        }
        getApi()
        questionNew = []
    }, [])

    useEffect(() => { // Quando a variável reQuestions estiver com o contéudo da API, chamamos duas funções
        if (reQuestions.length !== 0) {
            randomQuestion()
            setAlter()
        }
    }, [reQuestions])

    useEffect(() => { // Toda vez que o numberQuestion for alterado, será chamado a função
        if (numberQuestion !== 1) {
            setAlter()
        }
    }, [numberQuestion])

    function setAlter() { // Função que embaralha as alternativas da pergunta e coloca dentro de uma variável
        function randomAlter() {
            filterQuestion().map((value) => {
                let altern = [
                    { alternative: value.alt1 },
                    { alternative: value.alt2 },
                    { alternative: value.alt3 },
                    { alternative: value.alt4 }
                ]
                let alternNew = []
                while (alternNew.length < 4) {
                    let alternRandom = altern[Math.floor(Math.random() * altern.length)]

                    if (alternNew.includes(alternRandom) == false) {
                        alternNew.push(alternRandom)
                    }
                }
                setAlternatives(alternNew)
            })
        }
        randomAlter()
    }

    function verifySucess(correct, alternative) { // Verifica se a alternativa escolhida é a correta
        setStateAlternative(alternative)
        setDisable(true)
        if (filterQuestion().map((value) => value[correct]) == alternative) {
            setSucesses(successes + 1)
            setColorComp("#4EB500")
        }
        else {
            setColorComp("#B50000")
        }
        setTimeout(() => {
            if (numberQuestion !== 5) {
                setNumberQuestion(numberQuestion + 1)
                setColorComp("#FFF")
            }
            if (numberQuestion == 5) {
                setDisable(true)
                navigation.replace('End', {
                    successes: successes
                })
            }
            setDisable(false)
        }, 2000)
    }

    function randomQuestion() { // Função que embaralha as questões de acordo com o nível de dificuldade escolhido
        let questionDiffi = reQuestions.filter((values) => values.nivel == difficulty.toLowerCase())
        while (questionNew.length < 5) {
            let questionRandom = questionDiffi[Math.floor(Math.random() * questionDiffi.length)]

            if (questionNew.includes(questionRandom) == false) {
                questionNew.push(questionRandom)
            }
        }
        filterQuestion()
    }

    function filterQuestion() { // Função que escolhe o primeiro index do array
        return [questionNew[numberQuestion - 1]]
    }




    return (
        <View style={css.container}>
            {loanding ?
                <View style={css.loading}>
                    < ActivityIndicator size={150} color="#00ff00" />
                </View >
                :
                <ImageBackground imageStyle={{ resizeMode: "stretch" }} style={css.container} source={require('../assents/background_question.jpg')}>

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
                    {filterQuestion().map((value, index) => {
                        return (
                            <View style={css.container} key={index}>
                                <Text adjustsFontSizeToFit style={css.titleQuestion}>Questão {numberQuestion}</Text>

                                {images.filter((fil) => fil.id == value.id).map((values, index) => {
                                    return (
                                        <Image key={index} style={css.image} source={values.directory} />
                                    )
                                })}
                                <Text numberOfLines={5} adjustsFontSizeToFit style={css.questionText}>{value.questao}</Text>
                                <View style={css.viewAlternative}>
                                    {alternatives.map((alter, index) => {
                                        return (
                                            <View key={index}>
                                                <TouchableOpacity disabled={disable} style={[css.buttonAlternative, stateAlternative === alter.alternative && { backgroundColor: colorComp, borderColor: disable ? '#2A6000' : "#FFF", borderWidth: 1 }]} onPress={() => verifySucess(value.correta, alter.alternative)} activeOpacity={0.7}>
                                                    <Text numberOfLines={4} adjustsFontSizeToFit style={css.textAlternative}>{alter.alternative}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        )
                    })}
                </ImageBackground>
            }
        </View>
    )
}