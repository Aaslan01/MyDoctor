import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      height="30px"
      width="30px"
      viewBox="-143 145 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <Path d="M329 145h-432c-22.1 0-40 17.9-40 40v432c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V185c0-22.1-17.9-40-40-40zm10 472c0 5.5-4.5 10-10 10h-432c-5.5 0-10-4.5-10-10V185c0-5.5 4.5-10 10-10h432c5.5 0 10 4.5 10 10v432z" />
      <Path d="M234.3 313.1c-10.2 6-21.4 10.4-33.4 12.8-9.6-10.2-23.3-16.6-38.4-16.6-29 0-52.6 23.6-52.6 52.6 0 4.1.4 8.1 1.4 12-43.7-2.2-82.5-23.1-108.4-55-4.5 7.8-7.1 16.8-7.1 26.5 0 18.2 9.3 34.3 23.4 43.8-8.6-.3-16.7-2.7-23.8-6.6v.6c0 25.5 18.1 46.8 42.2 51.6-4.4 1.2-9.1 1.9-13.9 1.9-3.4 0-6.7-.3-9.9-.9 6.7 20.9 26.1 36.1 49.1 36.5-18 14.1-40.7 22.5-65.3 22.5-4.2 0-8.4-.2-12.6-.7 23.3 14.9 50.9 23.6 80.6 23.6 96.8 0 149.7-80.2 149.7-149.7 0-2.3 0-4.6-.1-6.8 10.3-7.5 19.2-16.7 26.2-27.3-9.4 4.2-19.6 7-30.2 8.3 10.9-6.5 19.2-16.8 23.1-29.1z" />
    </Svg>
  )
}

export default SvgComponent