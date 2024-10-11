import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../styles/theme';

const FbIcon = ({ width = 30, height = 30 }) => {
  return (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={'#1877f2'}
    >
   <Path  d="M15.12 5.32H17V2.14A26 26 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73"/>
    </Svg>
  );
};

export default FbIcon;
