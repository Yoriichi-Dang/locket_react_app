import React from "react";
import Svg, { Path, G } from "react-native-svg";
type Properties = {
  size: number;
  color?: string;
};
const CameraReverseIcon = ({ size, color = "black" }: Properties) => {
  return (
    <Svg
      fill={color}
      height={`${size}px`}
      width={`${size}px`}
      id="Capa_1"
      viewBox="0 0 368.553 368.553"
    >
      <G>
        <G>
          <Path
            d="M302.333,94.332l-41.874-54.176H108.095L66.22,94.332H0v234.066h368.553V94.332H302.333z M353.553,313.398H15V109.332
			h58.584l41.875-54.176h137.635l41.874,54.176h58.585L353.553,313.398L353.553,313.398z"
          />
          <Path
            d="M234.729,129.109h8.918v-15h-34.521v34.522h15v-8.515c22.102,13.715,35.568,37.653,35.568,64.042
			c0,41.585-33.832,75.416-75.417,75.416v15c49.856,0,90.417-40.561,90.417-90.416C274.694,173.601,259.632,145.785,234.729,129.109
			z"
          />
          <Path
            d="M138.424,264.061c-18.509-14.109-29.564-36.009-29.564-59.903c0-41.585,33.832-75.417,75.417-75.417v-15
			c-49.856,0-90.417,40.561-90.417,90.417c0,28.245,12.883,54.165,34.511,71.098h-9.469v15h34.522v-34.521h-15V264.061z"
          />
        </G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
      </G>
    </Svg>
  );
};

export default CameraReverseIcon;