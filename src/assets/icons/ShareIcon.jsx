import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../styles/theme';

const ShareIcon = ({ width = 30, height = 30 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none" // Use "none" if you want the path to be stroked instead of filled
    >
      <Path
        d="M12 5v8.5M15 7l-3-3l-3 3m-4 5v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
        fill="none"
        stroke={Theme.colors.IconColor}
        strokeLinecap="round"
        strokeLinejoin="round" 
        strokeWidth="2" 
      />
    </Svg>
  );
};

export default ShareIcon;
