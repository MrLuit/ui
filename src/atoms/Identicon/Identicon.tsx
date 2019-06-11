import makeBlockie from 'ethereum-blockies-base64';
import React, {
  ClassAttributes,
  ComponentPropsWithoutRef,
  HTMLAttributes,
} from 'react';
import { ThemedOuterStyledProps } from 'styled-components';

import styled from '../../styled-components';
import Theme from '../../Theme';
import Typography from '../../Typography';

// We need Typography to set the appropriate em size, but without its extra negative space
const TypographyWrapper = styled(Typography)`
  line-height: 0;
  margin: 0;
`;

const RoundedImage = styled.img`
  border-radius: 50%;
  height: 2.5em;
`;

export const Identicon = ({
  address,
  ...rest
}: { address: string } & ComponentPropsWithoutRef<
  typeof TypographyWrapper
>) => {
  return (
    <TypographyWrapper {...rest}>
      <RoundedImage src={makeBlockie(address)} />
    </TypographyWrapper>
  );
};

export default Identicon;
