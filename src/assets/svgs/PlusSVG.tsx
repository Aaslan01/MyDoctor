import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 32 32"
      {...props}>
      <Path
        d="M388 1053h-10v10c0 1.1-.896 2-2 2s-2-.9-2-2v-10h-10c-1.104 0-2-.9-2-2s.896-2 2-2h10v-10c0-1.1.896-2 2-2s2 .9 2 2v10h10c1.104 0 2 .9 2 2s-.896 2-2 2zm0-6h-8v-8a4 4 0 10-8 0v8h-8a4 4 0 100 8h8v8a4 4 0 108 0v-8h8a4 4 0 100-8z"
        transform="translate(-360 -1035)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default PlusSVG;
