import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const PostIcon = ({
  width = 48,
  height = 48,
  fillColor = 'black',
  strokeColor = 'black',
  isActive = false,
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none">
      <Circle
        cx="24"
        cy="24"
        r="20"
        fill={isActive ? fillColor : 'none'}
        stroke={strokeColor}
        strokeWidth="  1.5"
      />
      <Path
        d="M24 16v16M16 24h16"
        stroke={isActive ? '#fff' : 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PostIcon;
