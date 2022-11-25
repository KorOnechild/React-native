import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default function AboutPage() {
    const mainImage = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png'

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>
            <View style={styles.contentBox}>
                <Image 
                    source={{uri:mainImage}}
                    style={styles.mainImage}
                    resizeMode={'cover'}
                />
                <Text style={styles.contentTitle}> 많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.contentText}> 꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
                <TouchableOpacity style={styles.touchBox}>
                    <Text style={styles.touchBox.text}>여러분의 인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(38, 44, 116)'
    },
    contentBox: {
        flex: 1,
        justifyContent: 'center',
        margin: 40,
        marginBottom: 80,
        paddingLeft: 20,
        paddingRight: 20, 
        backgroundColor: '#fff',
        borderRadius: 30
    },
    mainImage:{
        alignSelf: 'center',
        width: '60%',
        height: '30%',
        borderRadius: 30
    },  
    title: {
        fontSize: 30,
        marginTop: 90,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: 'white'
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20 
    },
    contentText:{
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20 
    },
    touchBox: {
        backgroundColor: 'orange',
        borderRadius: 20,
        padding: 20,
        alignSelf: 'center',

        text: {
            color: '#fff',
            fontWeight: '700'
        }
    },
})