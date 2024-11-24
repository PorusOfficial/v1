import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const BellIcon = ({ width = 24, height = 24, isActive = false , color = 'black'}) => {
  // Define colors based on active state
  const fillColor = isActive ? color : 'none';

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <G fill="none" stroke={color}>
        <Path fill={fillColor} d="M6.448 8.97a5.586 5.586 0 0 1 11.104 0l.252 2.266l.006.057a8 8 0 0 0 1.074 3.18l.03.05l.577.963c.525.874.787 1.311.73 1.67a1 1 0 0 1-.345.61c-.279.234-.789.234-1.808.234H5.932c-1.02 0-1.53 0-1.808-.233a1 1 0 0 1-.346-.611c-.056-.359.206-.796.73-1.67l.579-.964l.03-.05a8 8 0 0 0 1.073-3.179l.006-.057z" />
        <Path
          fill={"none"}
          d="M9.102 18.406c.171.744.548 1.402 1.072 1.87c.524.47 1.166.724 1.826.724s1.302-.254 1.826-.723c.524-.47.9-1.127 1.072-1.871"
        />
      </G>
    </Svg>
  );
};

export default BellIcon;
