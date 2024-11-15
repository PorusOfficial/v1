import * as React from "react";
import Svg, { Line, Circle } from "react-native-svg";
const TimeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Line x1={10} x2={14} y1={2} y2={2} />
    <Line x1={12} x2={15} y1={14} y2={11} />
    <Circle cx={12} cy={14} r={8} />
  </Svg>
);
export default TimeIcon;
