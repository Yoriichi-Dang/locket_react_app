import React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size: number;
  color?: string;
};
const ChevronRight = ({ size, color = "black" }: Props) => {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </Svg>
  );
};

export default ChevronRight;
