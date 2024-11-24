import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const InfoIcon = ({
  width = 36,
  height = 36,
  fillColor = "black", // Default fill color
  backgroundColor = "none", // Default background color
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      {/* The circular dot */}
      <Circle cx="17.93" cy="11.9" r="1.4" fill={fillColor} />

      {/* The "i" stem */}
      <Path
        fill={fillColor}
        d="M21 23h-2v-8h-3a1 1 0 0 0 0 2h1v6h-2a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2"
      />

      {/* The circle around the icon */}
      <Path
        fill={fillColor}
        d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m0 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10"
      />

      {/* The invisible background rectangle */}
      <Path fill={backgroundColor} d="M0 0h36v36H0z" />
    </Svg>
  );
};

export default InfoIcon;
