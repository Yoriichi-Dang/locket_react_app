import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size: number;
  color?: string;
};
const EmailIcon = ({ size, color = "gray" }: Props) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      width={size}
      height={size}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      />
    </Svg>
  );
};

export default EmailIcon;
