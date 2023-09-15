import * as React from "react"
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path fill="#1E1E1E" d="M0 0H24V24H0z" />
      <G clipPath="url(#clip0_0_1)">
        <Path
          transform="translate(-37 -749)"
          fill="#fff"
          d="M0 0H375V1343H0z"
        />
        <G filter="url(#filter0_dd_0_1)">
          <Rect x={-17} y={-220} width={336} height={380} rx={12} fill="#fff" />
          <Rect x={-1} y={-39} width={45} height={45} rx={12} fill="#E2EDFF" />
        </G>
        <Path d="M-37-16h375v79H-37v-79z" fill="#fff" />
        <G
          stroke={props?.stroke??"#5492FD"}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M9.079 16.135h5.815" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.4 13.713c0-5.631.614-5.238 3.919-8.303C7.765 4.246 10.015 2 11.958 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C21.572 22 19.613 22 11.986 22 4.359 22 2.4 22 2.4 13.713z"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path
            fill="#fff"
            transform="translate(-37 -749)"
            d="M0 0H375V1343H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
