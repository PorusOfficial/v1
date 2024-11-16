import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Theme from '../../styles/theme';

const TimeIcon = ({width = 30, height = 30}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={Theme.colors.IconColor}>
      <G fill="none" stroke="black" strokeWidth="2">
        <Path d="M21 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" />
        <Path strokeLinecap="round" strokeLinejoin="round" d="M12 13V9" />
        <Path strokeLinejoin="round" d="M10 2h4" />
      </G>
    </Svg>
  );
};

export default TimeIcon;
