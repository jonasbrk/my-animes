import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IsvgProps} from '../../typings/svgProps';

export const UserIcon = (props: IsvgProps) => {
  const {fill = 'white', height = 20, width = 20} = props;
  return (
    <Svg width={width} height={height}>
      <Path
        d="M10 11.25C13.1066 11.25 15.625 8.73164 15.625 5.625C15.625 2.51836 13.1066 0 10 0C6.89375 0 4.375 2.51836 4.375 5.625C4.375 8.73164 6.89453 11.25 10 11.25ZM13.7148 12.5H6.25C2.79844 12.5 0 15.298 0 18.75C0 19.4402 0.559766 20 1.21484 20H18.75C19.4402 20 19.9648 19.4402 19.9648 18.75C20 15.2969 17.2031 12.5 13.7148 12.5Z"
        fill={fill}
      />
    </Svg>
  );
};
