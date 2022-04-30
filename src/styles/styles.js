import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    // STYLE COMPARTILHADO COM OS COMPONENTES QUESTION, END, HOME E TIP
    container: {
        flex: 1,
    },
    // STYLES HOME
    titleMain: {
        fontSize: 70,
        position: "absolute",
        alignSelf: 'center',
        top: "18%",
        color: "#00c400",
        fontFamily: 'BIZUDPMincho-Regular',
    },
    gradientMain: {
        backgroundColor: '#00c400',
        borderRadius: 5,
        padding: 10,
    },
    button: {
        position: 'absolute',
        bottom: 15,
        width: "40%",
    },
    textButton: { // STYLE COMPARTILHADO COM OS COMPONENTES DIFFICULTY E HOME
        textAlign: "center",
        color: "#FFF",
        fontSize: 22,
        fontFamily: 'VarelaRound-Regular',
        padding: 5
    },
    imageStart: {
        resizeMode: "cover",
        width: 150,
        height: 150,
    },
    viewLine: {
        flex: 1,
        position: "absolute",
        top: "40%",
        width: "100%"
    },
    buttonStart: {
        alignSelf: 'center',
        borderRadius: 150,
        zIndex: 2
    },
    line: {
        width: "100%",
        height: "25%",
        alignSelf: 'center',
        top: "60%"
    },

    // STYLES END
    viewEnd: {
        position: 'absolute',
        top: "20%",
        alignSelf: 'center'
    },
    text: {
        color: "#FFF",
        fontSize: 40,
        alignSelf: 'center',
        fontFamily: 'BIZUDPMincho-Regular',
        marginTop: 30
    },
    buttonBackEnd: {
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
    textButtonEnd: {
        textAlign: "center",
        color: "#00c400",
        fontSize: 20,
        fontWeight: 'bold'
    },
    phrase: {
        color: "#FFF",
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'BIZUDPMincho-Regular',
        marginTop: 35,
        margin: 10,
    },

    // STYLES DIFFICULTY

    viewDifficulty: {
        position: 'absolute',
        top: 30,
        alignItems: 'center'
    },
    buttonDifficulty: {
        minWidth: "80%"
    },
    containerDifficulty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleModalDif: {
        fontSize: 28,
        textAlign: "center",
        marginBottom: "15%",
        color: "#95A5A6",
        fontFamily: 'BIZUDPMincho-Regular',
    },
    infoDif: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: 'VarelaRound-Regular',
    },
    titleModal: {
        fontSize: 28,
        textAlign: "center",
        marginTop: "15%",
        marginBottom: "15%",
        color: "#95A5A6",
        fontFamily: 'BIZUDPMincho-Regular',
    },
    gradientDif: {
        padding: 25,
        borderRadius: 5,
        margin: 10,
    },

    // STYLES TIP

    imageTip: {
        resizeMode: 'contain',
        height: '60%',
        width: '90%',
        marginTop: 30,
        alignSelf:'center'
    },
    titleTip: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15,
        color: '#000'
    },
    viewScroll: {
        flex: 1,
        maxHeight: "17%"
    },
    textTip: {
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 17,
        color: "#000",
        lineHeight: 22
    },
    buttonBack: {
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: 2
    },

    //STYLES QUESTION

    viewIcon:{
        flexDirection: 'row',
        margin: 3,
        marginRight: 5
    },
    gradientQuestion:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleQuestion: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: "5%",
        color: '#000',
        fontFamily: 'VarelaRound-Regular'
    },
    questionText: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        width: "90%",
        maxHeight: "40%",
        alignSelf: 'center',
        fontFamily: 'VarelaRound-Regular'
    },
    image: {
        width: "80%",
        resizeMode: "stretch",
        height: "30%",
        alignSelf: 'center',
        marginTop:5,
        marginBottom:5
    },
    buttonAlternative: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        margin: "3%",
        padding: "3%",
        maxWidth: "100%",
        maxHeight: "70%",
        minHeight: "40%",
        minWidth: "30%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textAlternative: {
        color: '#000',
        fontSize: 17,
        fontFamily: 'VarelaRound-Regular',
        textAlign: "center",
        textAlignVertical: 'center',
        width: 140,
    },
    viewAlternative: {
        width: "95%",
        height: "40%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute',
        bottom: '3%',
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: 'center',
        alignContent: 'center',
    },
    menuBar: {
        flexDirection: 'row',
    },
    icon: {
        color: '#FFF'
    }
})