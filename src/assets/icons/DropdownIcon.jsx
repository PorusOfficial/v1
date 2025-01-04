import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DropdownIcon = ({ width = 30, height = 30 , color='black'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-5 -9 24 24"
      fill={"none"} // Change this to "none" if you want the path color controlled by stroke
    >
<Path d="M13 4.91669L7 9.16669L1 4.91669" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M1 1.375H13" stroke= {color} strokeWidth="2" strokeLinecap="round"/>
    </Svg>
  );
};

export default DropdownIcon;
