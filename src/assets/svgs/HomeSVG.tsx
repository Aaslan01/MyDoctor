// import * as React from 'react';
// import Svg, {Path} from 'react-native-svg';

// function HomeSVG(props: any) {
//   return (
//     <Svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="30"
//       height="30"
//       viewBox="0 0 24 24"
//       fill="#1B1B1B"
//       stroke="#1B1B1B"
//       {...props}>
//       <Path
//         d="M11.386 1.21a1 1 0 011.228 0l9 7A1 1 0 0122 9v11.5a1.5 1.5 0 01-1.5 1.5H15v-8a1 1 0 00-1-1h-4a1 1 0 00-1 1v8H3.5A1.5 1.5 0 012 20.5V9a1 1 0 01.386-.79l9-7z"
//         fill={props?.background ?? '#1B1B1B'}
//       />
//     </Svg>
//   );
// }

// export default HomeSVG;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        // opacity={0.5}
        d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521z"
        stroke={"#1B1B1B"}
        fill={props?.box??"#1B1B1B"}
        strokeWidth={1.6}
      />
      <Path
        d="M15 13h-3m0 0H9m3 0v-3m0 3v3"
        stroke={props?.plus??"white"}
        // fill="white"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default HomeSVG;

// <Svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="40"
//   height="40"
//   viewBox="0 -0.5 25 25"
//   fill="none"
//   // fill="#1B1B1B"
//   // stroke="#1B1B1B"
//   {...props}>
//   <Path
//     clipRule="evenodd"
//     d="M10.618 11.36a1.883 1.883 0 111.882 1.91 1.9 1.9 0 01-1.882-1.91v0z"
//     stroke="#1B1B1B"
//     // fill="none"
//     strokeWidth={1.5}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   />
//   <Path d="M4.063 8.84a.75.75 0 10.874 1.219l-.874-1.22zm5.18-2.79l.437.609v-.001l-.437-.609zm6.513 0l-.438.608h.001l.437-.609zm4.307 4.009a.75.75 0 00.874-1.22l-.874 1.22zM7.132 11.36a.75.75 0 00-1.5 0h1.5zm-.75 3.821l.75.006v-.006h-.75zm1.091 2.69l.534-.526-.534.526zm2.674 1.131l-.005.75h.005v-.75zm4.706 0v.75h.005l-.005-.75zm2.674-1.13l.534.526-.534-.527zm1.091-2.691h-.75v.006l.75-.006zm.75-3.821a.75.75 0 00-1.5 0h1.5zM4.937 10.059l4.743-3.4-.874-1.22-4.743 3.4.874 1.22zm4.744-3.401a4.829 4.829 0 015.637 0l.876-1.218a6.329 6.329 0 00-7.389 0l.876 1.218zm5.638 0l4.744 3.4.874-1.219-4.744-3.4-.874 1.22zM5.632 11.36v3.821h1.5V11.36h-1.5zm0 3.816a4.543 4.543 0 001.307 3.222l1.068-1.053a3.043 3.043 0 01-.875-2.158l-1.5-.011zm1.307 3.222a4.543 4.543 0 003.203 1.354l.01-1.5a3.043 3.043 0 01-2.145-.907L6.94 18.398zm3.208 1.354h4.706v-1.5h-4.706v1.5zm4.711 0a4.543 4.543 0 003.203-1.354l-1.068-1.053a3.044 3.044 0 01-2.145.907l.01 1.5zm3.203-1.354a4.543 4.543 0 001.307-3.223l-1.5.012a3.043 3.043 0 01-.875 2.158l1.068 1.053zm1.307-3.217V11.36h-1.5v3.821h1.5z"
//           fill="#000"
//   />
// </Svg>
