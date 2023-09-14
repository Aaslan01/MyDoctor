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
      <Path d="M11.478 21.367L16 17.601l-6.531-4.034L5 17.15zM16 17.6l4.535 3.767L27 17.15l-4.469-3.583z" />
      <Path d="M16.027 18.42v-.027l-.013.013-.014-.013v.027l-4.522 3.754-1.943-1.268v1.426L16 26.207v.012l.014-.012.013.012v-.012l6.477-3.875v-1.426l-1.942 1.268zM5 9.998l4.469 3.569L16 9.548l-4.522-3.767zm15.535-4.217L16 9.548l6.531 4.019L27 9.998z" />
    </Svg>
  )
}

export default SvgComponent
