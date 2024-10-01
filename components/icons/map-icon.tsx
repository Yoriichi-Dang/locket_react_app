import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
type Props = {
  size: number;
  color?: string;
};
const MapIcon = ({ size, color = "gray" }: Props) => {
  return (
    <Svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 192 192"
      fill="none"
    >
      <Path
        stroke={color}
        stroke-width="20"
        d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"
      />
      <Circle cx="96" cy="74" r="20" stroke={color} stroke-width="100" />
    </Svg>
  );
};

export default MapIcon;
