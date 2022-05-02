import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import css from '../styles/styles';

export default function Tip({ navigation }) {
    const slides = [
        {
            key: '1',
            title: 'Teste 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio nisi, vehicula a dapibus non, scelerisque quis leo. Nullam elementum erat mauris, ac posuere ante dapibus quis.',
            image: require('../assents/imageTip/tip1.png')
        },
        {
            key: '2',
            title: 'Teste 2',
            text: 'Vivamus dapibus, metus et finibus rutrum, quam mauris interdum leo, et semper ipsum sem in nisi. Mauris rhoncus dolor nulla, vitae tincidunt ipsum lacinia vitae. Ut aliquam diam quis ante sodales tincidunt. ',
            image: require('../assents/imageTip/tip2.png')
        },
        {
            key: '3',
            title: 'Teste 3',
            text: 'Proin eget tempor massa, vel tincidunt ipsum. Pellentesque sem libero, pellentesque vitae lacus a, euismod vehicula ligula.',
            image: require('../assents/imageTip/tip3.png')
        },
        {
            key: '4',
            title: 'Teste 4',
            text: 'Donec vitae enim sed dui venenatis efficitur. Mauris bibendum lobortis magna at condimentum.',
            image: require('../assents/imageTip/tip4.png')
        },
        {
            key: '5',
            title: 'Teste 5',
            text: 'Proin gravida pulvinar sapien, nec pulvinar ipsum eleifend eget. Phasellus ut elit magna. Praesent a eleifend neque. Pellentesque ac rhoncus nibh, et faucibus lorem. Donec tincidunt, sapien id euismod suscipit, leo lacus molestie turpis, sodales vestibulum erat elit quis felis. Cras quis quam tincidunt, laoreet turpis lobortis, molestie metus.',
            image: require('../assents/imageTip/tip5.png')
        }
    ] // Array com os títulos, texto e caminhos das imagens

    function renderSlides({ item }) { // Função que organiza cada tela com o cotéudo de cada index do array
        return (
            <View style={css.container}>
                <Image source={item.image} style={css.imageTip} />
                <Text style={css.titleTip}>{item.title}</Text>
                <ScrollView style={css.viewScroll}>
                    <Text style={css.textTip}>{item.text}</Text>
                </ScrollView>
            </View>
        )
    }
    return (
        <SafeAreaView style={css.container}>
            <TouchableOpacity style={css.buttonBack} onPress={()=> navigation.navigate('Home')}>
                <Icon name="chevron-left-circle" size={40} color="#00FF00" />
            </TouchableOpacity>
            <AppIntroSlider
                data={slides}
                renderItem={renderSlides}
                activeDotStyle={{
                    backgroundColor: '#00FF00',
                    width: 20,
                    marginTop: 20
                }}
                dotStyle={{
                    backgroundColor: '#BFC9CA',
                    marginTop: 20
                }}
                onDone={() => navigation.navigate('Home')}
                showNextButton={false}
                renderDoneButton={() => <Text style={{ fontSize: 18, color: '#2ECC71', fontWeight: '900' }}>PRONTO!</Text>}
            />
        </SafeAreaView>
    )
}