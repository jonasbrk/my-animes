import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IsvgProps} from '../../typings/svgProps';

export const ListIcon = (props: IsvgProps) => {
  const {fill = 'white', height = 20, width = 23} = props;
  return (
    <Svg width={width} height={height}>
      <Path
        d="M0 2.85714C0 1.27902 1.28701 0 2.875 0H20.125C21.7107 0 23 1.27902 23 2.85714V17.1429C23 18.7188 21.7107 20 20.125 20H2.875C1.28701 20 0 18.7188 0 17.1429V2.85714ZM2.875 5.71429H5.75V2.85714H2.875V5.71429ZM20.125 2.85714H8.625V5.71429H20.125V2.85714ZM2.875 11.4286H5.75V8.57143H2.875V11.4286ZM20.125 8.57143H8.625V11.4286H20.125V8.57143ZM2.875 17.1429H5.75V14.2857H2.875V17.1429ZM20.125 14.2857H8.625V17.1429H20.125V14.2857Z"
        fill={fill}
      />
    </Svg>
  );
};
