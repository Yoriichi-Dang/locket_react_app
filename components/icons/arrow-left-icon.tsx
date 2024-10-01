import React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size: number;
  color?: string;
};
const ArrowLeftIcon = ({ size, color = "black" }: Props) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      width={`${size}px`}
      height={`${size}px`}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
