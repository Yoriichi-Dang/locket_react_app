import React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size: number;
  color?: string;
};
const GlassIcon = ({ size, color = "black" }: Props) => {
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
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </Svg>
  );
};

export default GlassIcon;
