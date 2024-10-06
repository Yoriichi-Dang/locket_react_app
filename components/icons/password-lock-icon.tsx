import React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size: number;
  color?: string;
};
const PasswordLockIcon = ({ size, color = "black" }: Props) => {
  return (
    <Svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
        stroke={color}
        stroke-width="1.5"
      />
      <Path
        d="M12.0002 10V14M10.2678 11L13.7319 13M13.7317 11L10.2676 13"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M6.73266 10V14M5.00023 11L8.46434 13M8.4641 11L5 13"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M17.2681 10V14M15.5356 11L18.9997 13M18.9995 11L15.5354 13"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default PasswordLockIcon;
