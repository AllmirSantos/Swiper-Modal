import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View, Text,StatusBar, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const data = ['brown', 'orange', 'red', 'blue', 'green'];

export default function Swiper() {
    const scrollValue = useRef(new Animated.Value(0)).current;
    const translateX = scrollValue.interpolate({
        inputRange: [0, width],
        outputRange: [0, 20],
    });
    const inputRange = [0];
    const scaleOutputRange = [1];
    data.forEach(
        (_, i) =>
            i != 0 && inputRange.push(...[(width * (2 * i - 1)) / 2, width * i]),
    );
    data.forEach((_, i) => i != 0 && scaleOutputRange.push(...[3, 1]));
    const scaleX = scrollValue.interpolate({
        inputRange,
        outputRange: scaleOutputRange,
    });
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#3a0164" />
            <View style={styles.Header}>
                <Text  style={styles.TextHeader}>Swiper</Text>
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                    { useNativeDriver: false },
                )}>
                {data.map(x => (
                    <View style={[styles.card, { backgroundColor: x }]} key={x} />
                ))}
            </ScrollView>
            <View style={styles.indicatorConatiner} pointerEvents="none">
                {data.map(x => (
                    <Indicator x={x} key={x} />
                ))}
                <Animated.View
                    style={[
                        styles.activeIndicator,
                        {
                            position: 'absolute',
                            transform: [{ translateX }, { scaleX }],
                        },
                    ]}
                />
            </View>
                         
            <View style={styles.BoxInfor}>
                         <Text style={styles.BoxInforNome}>Feito por Almir Stark  </Text>
                   
                </View>
                
                <TouchableOpacity style={styles.BoxInforGit}>
            <Text style={styles.BtnText}>Git </Text>
            

                         </TouchableOpacity>
        </View>
    );
}

function Indicator() {
    return <View style={styles.indicator} />;
}

const styles = StyleSheet.create({
    Header:{
        backgroundColor: "#4B0082",
        display: "flex",
        paddingLeft: 20,
        paddingTop: 20,
        top: -3,
        paddingBottom: 20,
        textAlignVertical: "center"
    },
    TextHeader:{
        color:"#fff",
        fontSize: 20,
    },
    container: {
        flex: 1,
    },
    card: {
        width: width - 10,
        height: "100%",
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorConatiner: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 42,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#00000044',
        marginHorizontal: 5,
    },
    activeIndicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },
    BoxInfor:{
        backgroundColor: "#000",
        height: 30,
        bottom:-5,
        alignItems: 'center',
        display: 'flex',
        width: "100%",
        textAlign: 'center',
        
        elevation: 1,
    },
    BoxInforNome:{
        color: "#fff",
        top: 5,
    },
    BoxInforGit:{
        backgroundColor:"#4B0082",
        display: "flex",
        alignItems: "center",
        paddingVertical: 10,
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 5,
        right: 5,
        borderRadius: 50,
        elevation: 10,
        shadowOffset:{
            width:2,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    BtnText:{
        color: "#fff",
        fontSize: 22,
        top: 5,
    }
});

//BY ALMIR STARK