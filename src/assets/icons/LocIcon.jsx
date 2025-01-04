import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LocIcon = ({ width = 14, height = 18 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.46648 16.35C7.33048 16.4477 7.16726 16.5002 6.99982 16.5002C6.83238 16.5002 6.66915 16.4477 6.53315 16.35C2.50898 13.4817 -1.76185 7.58167 2.55565 3.31833C3.74094 2.15237 5.33718 1.49927 6.99982 1.5C8.66648 1.5 10.2657 2.15417 11.444 3.3175C15.7615 7.58083 11.4907 13.48 7.46648 16.35Z"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99967 9C7.4417 9 7.86562 8.8244 8.17819 8.51184C8.49075 8.19928 8.66634 7.77536 8.66634 7.33333C8.66634 6.8913 8.49075 6.46738 8.17819 6.15482C7.86562 5.84226 7.4417 5.66666 6.99967 5.66666C6.55765 5.66666 6.13372 5.84226 5.82116 6.15482C5.5086 6.46738 5.33301 6.8913 5.33301 7.33333C5.33301 7.77536 5.5086 8.19928 5.82116 8.51184C6.13372 8.8244 6.55765 9 6.99967 9Z"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LocIcon;
