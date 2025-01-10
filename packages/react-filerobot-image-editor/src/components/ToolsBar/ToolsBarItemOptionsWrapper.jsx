/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { StyledToolsBarItemOptionsWrapper } from './ToolsBar.styled';

const ToolsBarItemOptionsWrapper = ({
  children = undefined,
  isPhoneScreen = false,
}) => (
  <StyledToolsBarItemOptionsWrapper
    className="FIE_tool-options-wrapper"
    hasChildren={Boolean(children)}
    isPhoneScreen={isPhoneScreen}
  >
    {children}
  </StyledToolsBarItemOptionsWrapper>
);

ToolsBarItemOptionsWrapper.propTypes = {
  children: PropTypes.node,
  isPhoneScreen: PropTypes.bool,
};

export default ToolsBarItemOptionsWrapper;
