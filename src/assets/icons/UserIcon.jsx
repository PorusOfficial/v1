import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../styles/theme';

const  UserIcon = ({ width = 30, height = 30 })=>{
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={Theme.colors.IconColor}
      >
        <Path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" />
      </Svg>
    );
};




export default UserIcon;
