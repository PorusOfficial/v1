import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../styles/theme';

const ShareIcon = ({ width = 30, height = 30 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path  strokeWidth={1.2} d="M12.7857 5L8.52357 1L4.21429 5M8.52357 1.021V13M5.28571 8H3.14286C2.57454 8 2.02949 8.21071 1.62763 8.58579C1.22576 8.96086 1 9.46957 1 10V14C1 14.5304 1.22576 15.0391 1.62763 15.4142C2.02949 15.7893 2.57454 16 3.14286 16H13.8571C14.4255 16 14.9705 15.7893 15.3724 15.4142C15.7742 15.0391 16 14.5304 16 14V10C16 9.46957 15.7742 8.96086 15.3724 8.58579C14.9705 8.21071 14.4255 8 13.8571 8H11.7143" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>

    </Svg>
  );
};

export default ShareIcon;
