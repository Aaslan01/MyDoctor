import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
      <Path
        d="M16.667 16.667a.833.833 0 01-.834.833H4.167a.833.833 0 01-.834-.833v-7.5h-2.5L9.44 1.343a.833.833 0 011.122 0l8.606 7.824h-2.5v7.5z"
        fill="#5492FD"
      />
      <Path
        d="M12.18 10a.63.63 0 01.463.19.63.63 0 01.19.463v4.527a.63.63 0 01-.19.463.63.63 0 01-.463.19H7.653a.63.63 0 01-.463-.19.63.63 0 01-.19-.463v-4.527a.63.63 0 01.19-.463.63.63 0 01.463-.19h4.527zm-.319 3.57v-1.306H10.57v-1.292H9.263v1.292h-1.29v1.306h1.29v1.291h1.307V13.57h1.291z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
