import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Theme from '../../styles/theme';

const PhoneIcon = ({width = 30, height = 30}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={'black'}>
      <Path
         d="M14.004 0H5.996A1.996 1.996 0 0 0 4 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0 0 16 18.004V1.996A1.996 1.996 0 0 0 14.004 0M10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1s1.25.447 1.25 1s-.56 1-1.25 1m4-3H6V2h8z"
    />
    </Svg>
  );
};

export default PhoneIcon;

