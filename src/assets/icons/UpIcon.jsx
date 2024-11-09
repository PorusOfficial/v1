import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../styles/theme';

const UpIcon = ({ width = 30, height = 30 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none" // Change this to "none" if you want the path color controlled by stroke
    >
      <Path
        d="M5 24L24 6l19 18H31v18H17V24z"
        fill={Theme.colors.IconColor} // Set fill color here if needed
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4" // Changed to camelCase
      />
    </Svg>
  );
};

export default UpIcon;
