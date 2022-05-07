import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IsvgProps} from '../../typings/svgProps';

export const FilterIcon = (props: IsvgProps) => {
  const {fill = 'white', height = 20, width = 23} = props;
  return (
    <Svg width={width} height={height}>
      <Path
        d="M0.1505 2.14336C0.277119 1.87604 0.477039 1.65016 0.727003 1.49201C0.976968 1.33386 1.2667 1.24993 1.56249 1.25H18.4375C19.043 1.25 19.5899 1.59766 19.8477 2.14336C20.1094 2.68906 20.0274 3.33477 19.6133 3.80195L12.5 12.5352V17.5C12.5 17.9727 12.2344 18.4062 11.8086 18.6172C11.3867 18.8281 10.8789 18.7852 10.5 18.5L8 16.625C7.68359 16.3906 7.5 16.0195 7.5 15.625V12.5352L0.353196 3.80195C0.165888 3.57302 0.0474102 3.29563 0.0115355 3.00202C-0.0243392 2.70841 0.0238634 2.41065 0.150539 2.14336H0.1505Z"
        fill={fill}
      />
    </Svg>
  );
};
