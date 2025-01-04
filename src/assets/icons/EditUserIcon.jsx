import React from 'react';
import Svg, { Path } from 'react-native-svg';

const EditUserIcon = ({ w = 27, h = 27, color = 'black' }) => {
  return (
    <Svg
      width={w}
      height={h}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.5 10.125C15.6746 10.125 17.4375 8.36212 17.4375 6.1875C17.4375 4.01288 15.6746 2.25 13.5 2.25C11.3254 2.25 9.5625 4.01288 9.5625 6.1875C9.5625 8.36212 11.3254 10.125 13.5 10.125Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.25 23.0625C2.25 18.0917 6.78319 14.0625 12.375 14.0625M17.4375 23.625L23.0625 18L20.8125 15.75L15.1875 21.375V23.625H17.4375Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EditUserIcon;
