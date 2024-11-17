import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MenuIcon = ({w = 30, h = 30}) => (
  <Svg
    fill="#000000"
    width={w}
    height={h}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3,12H21M9,18H21M3,6H15"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default MenuIcon;
