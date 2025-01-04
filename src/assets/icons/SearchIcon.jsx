import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = ({color, w = 30, h=30}) => (
  <Svg
    width={w}
    height={h}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"
      fill={color}
    />
  </Svg>
);
export default SearchIcon;