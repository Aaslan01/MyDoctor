import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={!props?.fill ? "52px" :"42px"}
      height={!props?.fill ? "52px" :"42px"}
      viewBox="0 0 24 24"
      fill={props?.fill ?? 'white'}
      {...props}>
      {!props?.fill && (
        <>
          <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4 11h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 010 2z" />
          <Path
            xmlns="http://www.w3.org/2000/svg"
            fill="#1B1B1B"
            d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4 11h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 010 2z"
          />
        </>
      )}
      {props?.fill && (
        <>
          <Path
            d="M11 8a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V8z"
            fill="#1B1B1B"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM3.007 12a8.993 8.993 0 1017.986 0 8.993 8.993 0 00-17.986 0z"
            fill="#1B1B1B"
          />
        </>
      )}
    </Svg>
  );
}

export default SvgComponent;
