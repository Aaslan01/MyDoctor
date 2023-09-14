import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G fill="#5492FD">
        <Path d="M8.75 17.5s-1.25 0-1.25-1.25 1.25-5 6.25-5S20 15 20 16.25s-1.25 1.25-1.25 1.25h-10zm5-7.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.52 17.5a2.797 2.797 0 01-.27-1.25c0-1.694.85-3.438 2.42-4.65a7.906 7.906 0 00-2.42-.35c-5 0-6.25 3.75-6.25 5s1.25 1.25 1.25 1.25h5.27z"
        />
        <Path d="M5.625 10a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
