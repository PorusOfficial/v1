import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    body : {
        backgroundColor : 'white',
        flex: 1,
        color : 'black',
        paddingHorizontal: 14,

    },
    InriaBold: {
        fontFamily: 'InriaSans-Bold',
        fontSize: 40,
        color: 'black',
        letterSpacing:2,
        
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


});

export default GlobalStyles;
