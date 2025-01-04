import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const onPressColor = '#E3E3E3';

export const RoundBtn = ({ name, onPress, Icon = null, style = {}, iconW = 20, iconH = 20, iconColor = 'black' }) => {
    const fontSize = style?.text?.fontSize
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? onPressColor : '#F6F6F6', paddingVertical: style.main?.paddingVertical || 5 },
                style.main,
            ]}
        >
            {Icon && <Icon w={iconW} h={iconH} />}
            <Text style={[styles.btnName, style.text, {fontSize : fontSize || 14 }]}>{name}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#F6F6F6',
        borderColor: '#B0CBFC',
        gap: 5,
    },
    btnName: {
        color: 'black',
        fontSize: 18,
        letterSpacing: 0.7,
        textAlign: 'center',
    },
});
