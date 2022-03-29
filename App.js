/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View,} from 'react-native';

const App = () => (
    <SafeAreaView>
        <NotificationBox/>
    </SafeAreaView>
)

export const NotificationBox = () => (
    <View
        style={[styles.outerContainer, {borderColor: '#BFC0C2', borderTopColor: '#005691',}]}>
        <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textHeading}>Lorem ipsum</Text>
                <Text>Lorem ipsum</Text>
                <View style={styles.link}>
                    <Text style={{color: '#006EAD'}}>Lorem ipsum</Text>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 12,
        marginLeft: 4,
        marginRight: 16,
        marginBottom: 14,
    },
    link: {
        marginTop: 8,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    outerContainer: {
        borderWidth: 1,
        borderTopWidth: 5,
    },
    textContainer: {
        flexShrink: 1,
    },
    textHeading: {
        marginBottom: 2,
    },
});

export default App;
