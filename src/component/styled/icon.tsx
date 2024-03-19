import React from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

interface ProviderProps { // only if you use Typescript
  className?: string,
  iconSize: string,
  needMargin: boolean,
  children: JSX.Element,
}
const Provider = ({ className, children }: ProviderProps) =>
  <IconContext.Provider
    value={{ className, }}>
    {children}
  </IconContext.Provider>;

const StyledIcon = styled(Provider)`
  font-size: ${(props) => props.iconSize};
  margin-right:  ${(props) => props.needMargin ? '4px': 'none'};
`;

StyledIcon.defaultProps = {
  iconSize: '18px',
  needMargin: true
};

export default StyledIcon;