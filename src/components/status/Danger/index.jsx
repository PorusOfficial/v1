import React from 'react';
import { View, StyleSheet, Animated, ImageBackground } from 'react-native';
import avatarImage from '../../../assets/img/avtar/avtar01.png';

const AnimatedCircle = () => {
    const scaleValue = new Animated.Value(1);
    const opacityValue = new Animated.Value(0.6);

    React.useEffect(() => {
        const animate = () => {
            Animated.loop(
                Animated.parallel([
                    Animated.sequence([
                        Animated.timing(scaleValue, {
                            toValue: 1.2,
                            duration: 1500,
                            useNativeDriver: true,
                        }),
                        Animated.timing(scaleValue, {
                            toValue: 1,
                            duration: 1500,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.sequence([
                        Animated.timing(opacityValue, {
                            toValue: 0.1,
                            duration: 1500,
                            useNativeDriver: true,
                        }),
                        Animated.timing(opacityValue, {
                            toValue: 0.4,
                            duration: 1500,
                            useNativeDriver: true,
                        }),
                    ]),
                ])
            ).start();
        };

        animate();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [{ scale: scaleValue }],
                        opacity: opacityValue,
                    },
                ]}
            />
            <View style={styles.innerCircle}>
                <ImageBackground source={avatarImage} style={styles.avatar} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 90,
        height: 90,
        borderRadius: 45, // Half of the width/height for a perfect circle
        backgroundColor: '#FF0000',
        position: 'absolute',
        shadowColor: '#FF0000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 25,
        elevation: 15,
        borderColor: '#FF0000',
    },
    innerCircle: {
        width: 70,
        height: 70,
        borderRadius: 35, // Half of the width/height for a perfect circle
        shadowColor: '#FF0000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 3,
        borderColor: '#FF0000',
        overflow: 'hidden', // Ensure the avatar image is clipped to the circle
    },
    avatar: {
        width: '100%', // Ensure the image covers the circle
        height: '100%',
        resizeMode: 'cover', // Cover the entire area without distortion
    },
});

export default AnimatedCircle;
