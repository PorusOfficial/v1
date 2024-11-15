import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../components/button/PrimaryButton';
import GlobalStyles from '../styles/GlobalStyle';
import gettingStartedImage from '../assets//img/getting_started.png';
import Danger from '../components/status/Danger';

const GetStartedScreen = () => {
return (
    <View style={styles.getStartedContainer}>
        <ImageBackground
            source={gettingStartedImage}
            style={styles.mapBackground}
            resizeMode="cover">
            {/* Bottom Section with Gradient-like Effect */}
            <View style={styles.bottomContainer}>
                {/* Linear Gradient */}
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']}
                    style={styles.gradientOverlay}
                />
                {/* Content */}
                <View style={styles.contentContainer}>
                    <Text style={[GlobalStyles.InriaBold, styles.titleText]}>
                        Get real time alert.
                    </Text>
                    <PrimaryButton
                        name="Getting Start"
                        onPress={() => {}}
                        style={styles.button}
                    />
                </View>
            </View>
            <View style={styles.centeredDanger}>
                <Danger
                    style={styles.dangerCircle}
                />
            </View>
        </ImageBackground>
    </View>
);
};

const styles = StyleSheet.create({
    getStartedContainer: {
        flex: 1,
    },
    mapBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
    },
    gradientOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 250,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 40,
        justifyContent: 'flex-end',
        marginBottom: 30,
    },
    titleText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#fff',
        letterSpacing: 1,
        marginBottom: 24, // Added marginBottom for spacing
    },
    button: {
        marginBottom: 4, // Added marginBottom for spacing
    },
    centeredDanger: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
});


export default GetStartedScreen;
