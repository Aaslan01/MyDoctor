import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={27}
      height={28}
      viewBox="0 0 27 28"
      fill="none"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0.804352H27V27.217352H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1_160"
            transform="matrix(.00195 0 0 .002 0 -.011)"
          />
        </Pattern>
        <Image
          id="image0_1_160"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent