import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IsvgProps} from '../../typings/svgProps';

export const TableFilterIcon = (props: IsvgProps) => {
  const {fill = 'white', height = 20, width = 23} = props;
  return (
    <Svg width={width} height={height}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8.5V3H10V8.5H3ZM0 11.5V8.5V2C0 0.895431 0.895431 0 2 0H10H13H21C22.1046 0 23 0.895431 23 2V8.5V11.5V18C23 19.1046 22.1046 20 21 20H13H10H2C0.89543 20 0 19.1046 0 18V11.5ZM10 17H3V11.5H10V17ZM13 17H20V11.5H13V17ZM20 8.5V3H13V8.5H20Z"
        fill={fill}
      />
    </Svg>
  );
};
