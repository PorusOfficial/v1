import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MenuIcon = (props) => (
  <Svg
    fill="#000000"
    width="35px"
    height="35px"
    viewBox="0 0 24 24"
    id="menu"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <Path
      id="primary"
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
