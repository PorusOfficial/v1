import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Arrow = ({width = 30, height = 30, color = '#1266ED', left=false}) => (
  <Svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 2 48 48" // Updated to fit the Path coordinates
    rotation={left ? 180 : 0}
  >
    <Path
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z"
    />
  </Svg>
);

export default Arrow;
