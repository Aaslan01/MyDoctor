import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={30}
      viewBox="0 0 20 30"
      fill="none"
      {...props}
    >
      <Path
        d="M19.667 10.333a9.583 9.583 0 00-19.167 0c0 9.152 9.583 19.167 9.583 19.167s9.584-10.015 9.584-19.167zm-14.759.115a5.173 5.173 0 018.834-3.657 5.174 5.174 0 11-8.834 3.657z"
        fill="#5492FD"
      />
    </Svg>
  )
}

export default SvgComponent
