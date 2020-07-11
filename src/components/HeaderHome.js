import React from 'react';
import { Text } from '@ui-kitten/components'
import { View, Image, StyleSheet } from 'react-native';

export const HeaderHome = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image style={styles.logo} source={require('../assets/icon/Logo.png')} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>A site for your seiyuu needs!</Text>
                <Text style={styles.subtitle}>
                    "Find information of your favorite anime voice actors here"
          </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 64.17, 
        height: 64, 
        marginLeft: 20, 
        marginTop: 15
    },
    title: {
        marginLeft: 20, 
        marginTop: 20, 
        fontSize: 20, 
        fontStyle: 'normal', 
        lineHeight: 30, 
        fontFamily: 'Poppins-SemiBold'
    },
    subtitle: {
        marginLeft: 20, 
        fontSize: 12, 
        fontWeight: '300', 
        fontStyle: 'normal', 
        lineHeight: 18, 
        fontFamily: 'Poppins-Regular'
    }
})