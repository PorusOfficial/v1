import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({
  width = 30,
  height = 32,
  fillColor = "black", // Default fill color for inactive state
  strokeColor = "black", // Border color
  isActive = false, // Determines active/inactive state
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M28.3334 28.163V13.0977C28.3334 12.8225 28.2732 12.5511 28.1575 12.305C28.0417 12.0589 27.8737 11.8448 27.6667 11.6797L16.0001 2.37466C15.7116 2.14456 15.3607 2.02018 15.0001 2.02018C14.6395 2.02018 14.2886 2.14456 14.0001 2.37466L2.33341 11.6797C2.12642 11.8448 1.95842 12.0589 1.8427 12.305C1.72699 12.5511 1.66675 12.8225 1.66675 13.0977V28.163C1.66675 28.6331 1.84234 29.0839 2.1549 29.4163C2.46746 29.7487 2.89139 29.9354 3.33341 29.9354H10.0001C10.4421 29.9354 10.866 29.7487 11.1786 29.4163C11.4912 29.0839 11.6667 28.6331 11.6667 28.163V22.8458C11.6667 22.3758 11.8423 21.9249 12.1549 21.5926C12.4675 21.2602 12.8914 21.0734 13.3334 21.0734H16.6667C17.1088 21.0734 17.5327 21.2602 17.8453 21.5926C18.1578 21.9249 18.3334 22.3758 18.3334 22.8458V28.163C18.3334 28.6331 18.509 29.0839 18.8216 29.4163C19.1341 29.7487 19.5581 29.9354 20.0001 29.9354H26.6667C27.1088 29.9354 27.5327 29.7487 27.8453 29.4163C28.1578 29.0839 28.3334 28.6331 28.3334 28.163Z"
        fill={isActive ? fillColor : "white"} // Fill color changes based on state
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
