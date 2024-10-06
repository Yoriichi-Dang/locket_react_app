import React from "react";
import Svg, { Path, G, Defs } from "react-native-svg";
type Properties = {
  size: number;
  color?: string;
};
const FlashIcon = ({ size, color = "black" }: Properties) => {
  return (
    <Svg width={`${size}px`} height={`${size}px`} viewBox="0 0 20 20">
      <Defs></Defs>
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="Dribbble-Light-Preview"
          transform="translate(-180.000000, -3759.000000)"
          fill={color}
        >
          <G id="icons" transform="translate(56.000000, 160.000000)">
            <Path
              d="M143.478847,3610.53259 L133.816847,3618.69259 C132.901847,3619.37959 131.351847,3618.83659 131.471847,3617.83559 L132.093847,3611.70059 C132.168847,3611.07959 131.639847,3610.56159 130.912847,3610.54259 L125.257847,3610.39959 C124.084847,3610.36959 123.546847,3609.14159 124.461847,3608.45459 L133.932847,3599.30959 C134.847847,3598.62259 136.013847,3599.15559 135.892847,3600.15659 L135.270847,3607.27159 C135.195847,3607.89259 135.724847,3608.41059 136.451847,3608.42859 L142.874847,3608.59259 C144.048847,3608.62259 144.393847,3609.84559 143.478847,3610.53259"
              id="flash-[#1007]"
            ></Path>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default FlashIcon;
