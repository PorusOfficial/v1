import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../styles/theme';

const LockIcon = ({ width = 30, height = 30 }) => {
  return (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={Theme.colors.IconColor}
    >
    <Path
        d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
    />
    </Svg>
  );
};

export default LockIcon;
