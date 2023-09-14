import * as React from "react"
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      {...props}
    >
      <Path fill="#1E1E1E" d="M0 0H19V21H0z" />
      <G clipPath="url(#clip0_0_1)">
        <Path
          transform="translate(-258 -516)"
          fill="#fff"
          d="M0 0H375V1543H0z"
        />
        <Path
          d="M-258-239c0-11.046 8.954-20 20-20H97c11.046 0 20 8.954 20 20v1240h-375V-239z"
          fill="#FBFBFB"
        />
        <Rect
          x={-8.5}
          y={-27.5}
          width={104}
          height={57}
          rx={7.5}
          fill="#fff"
          stroke="#EEE"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6 0c.046 0 .09.004.134.011l.145.001c.215 0 .422.088.572.243l5.354 5.579a.792.792 0 01.221.548v9.69a4.881 4.881 0 01-4.703 4.927L4.846 21H4.73A4.848 4.848 0 010 16.282L0 4.747C.061 2.124 2.227.012 4.831.012h6.637A.799.799 0 0111.6 0zm-.792 1.597H4.833a3.263 3.263 0 00-3.247 3.169v11.306a3.263 3.263 0 003.18 3.342h8.525c1.764-.073 3.162-1.539 3.15-3.336V7.382h-2.125a3.522 3.522 0 01-3.508-3.514v-2.27zm.595 11.731a.793.793 0 010 1.586H5.695a.793.793 0 010-1.586h5.708zM9.242 9.362a.793.793 0 010 1.586H5.694a.793.793 0 010-1.586h3.548zm3.152-6.876v1.382c0 1.061.863 1.926 1.924 1.93l1.253-.002-3.177-3.31z"
          fill="#5492FD"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path
            fill="#fff"
            transform="translate(-258 -516)"
            d="M0 0H375V1543H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
