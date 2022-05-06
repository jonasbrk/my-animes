import React, {useEffect, useState} from 'react';
import {SwitchButton, SwitchContainer} from './SwitchMenu.styles';
import {Paragraph} from '../../styles/typography';
import {colors} from '../../styles/colors';

interface StitchMenuProps {
  first: string;
  second: string;
  onChange: (active: string) => void;
}

export const SwitchMenu: React.FC<StitchMenuProps> = props => {
  const {onChange, first, second} = props;
  const [current, setCurrent] = useState<string>(first);

  useEffect(() => {
    onChange(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <SwitchContainer>
      <SwitchButton
        active={current === first}
        onPress={() => setCurrent(first)}>
        <Paragraph
          fontWeight="bold"
          color={current === first ? colors.primary : colors.white}>
          {first}
        </Paragraph>
      </SwitchButton>
      <SwitchButton
        active={current === second}
        onPress={() => setCurrent(second)}>
        <Paragraph
          fontWeight="bold"
          color={current === second ? colors.primary : colors.white}>
          {second}
        </Paragraph>
      </SwitchButton>
    </SwitchContainer>
  );
};
