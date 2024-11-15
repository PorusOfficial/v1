import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Arrow = (props) => (
  <Svg
    height="30px"
    width="30px"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 50 50"
    enableBackground="new 0 0 50 50"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      fill="#231F20"
      d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z"
    />
  </Svg>
);
export default Arrow;
