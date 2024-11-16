import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../styles/theme';

const BellIcon = ({ width = 30, height = 30}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill={Theme.colors.IconColor}
    >
      <Path
        fill="black"
        d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.6 12.6 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.6 12.6 0 0 1-1.35 4.81 14.4 14.4 0 0 1-2.47 2.93 1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75M5.13 28.94a16.2 16.2 0 0 0 2.44-3 14.2 14.2 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.2 14.2 0 0 0 1.65 5.85 16.2 16.2 0 0 0 2.44 3Z"
      />
      <Path
        fill="black"
        d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28"
      />
      <Path fill="none" d="M0 0h36v36H0z" />
    </Svg>
  );
};

export default BellIcon;
