import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 32 32"
      {...props}
    >
      <Path d="M20.445 5h-8.891A6.559 6.559 0 005 11.554v8.891A6.559 6.559 0 0011.554 27h8.891a6.56 6.56 0 006.554-6.555v-8.891A6.557 6.557 0 0020.445 5zm4.342 15.445a4.343 4.343 0 01-4.342 4.342h-8.891a4.341 4.341 0 01-4.341-4.342v-8.891a4.34 4.34 0 014.341-4.341h8.891a4.342 4.342 0 014.341 4.341l.001 8.891z" />
      <Path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 11-.001-6.95 3.475 3.475 0 01.001 6.95zm5.7-10.484a1.363 1.363 0 11-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
    </Svg>
  )
}

export default SvgComponent
