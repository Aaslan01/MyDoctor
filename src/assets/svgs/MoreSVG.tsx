import * as React from 'react';
import Svg, {Path, G, Rect, Defs, ClipPath} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.334 2C19.723 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.333 22H7.665C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2h8.669zm0 1.5H7.665C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.165 4.416h8.668c2.531 0 4.167-1.733 4.167-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416zm-.386 7.514a1 1 0 110 2 1.003 1.003 0 01-1.005-1c0-.553.443-1 .995-1h.01zm-4.01 0a1 1 0 110 2 1.003 1.003 0 01-1.004-1c0-.553.443-1 .996-1h.008zm-4.008 0a1 1 0 110 2 1.003 1.003 0 01-1.005-1c0-.553.443-1 .996-1h.009z"
        fill={props?.fill ?? '#5492FD'}
      />
    </Svg>
  );
}

export default SvgComponent;
