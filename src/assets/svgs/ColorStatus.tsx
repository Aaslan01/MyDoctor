import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}>
      <Circle cx={9} cy={9} r={9} fill="#D0E8D3" />
      <Circle cx={8.99992} cy={8.99995} r={5.72727} fill="#098416" />
    </Svg>
  );
}

export default SvgComponent;
