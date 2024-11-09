import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Theme from '../../styles/theme';

const DownVIcon = ({width = 30, height = 30}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={Theme.colors.IconColor}>
      <Path
        fill="black"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="m5 24l19 18l19-18H31V6H17v18z"
      />
    </Svg>
  );
};

export default DownVIcon;
