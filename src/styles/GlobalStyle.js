import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : 'white',
        paddingHorizontal: 10,
        margin  : 0,

    },
    InriaBold: {
        fontFamily: 'InriaSans-Bold',
        fontSize: 40,
        color: 'black',
        letterSpacing:1.5,
      },

    InriaLight: {
        fontFamily: 'InriaSans-Light',
        fontSize: 40,
        color: 'black',
    },
    InriaRegular: {
        fontFamily: 'InriaSans-Regular',
        fontSize: 40,
        color: 'black',

    },
    InterRegular: {
        fontFamily: 'InterRegular',
        fontSize: 14,
        color: 'black',

    },


});

export default GlobalStyles;
