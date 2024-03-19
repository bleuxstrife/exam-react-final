import React from 'react';
import PropTypes from 'prop-types';
import { ActionContainer } from '../../styled/container';
import { ActButton } from '../../styled/button';

function ActionButton({ title, onClickAction, child }) {
  return (
    <ActionContainer>
      <ActButton
        type="button"
        title={title}
        onClick={(e) => onClickAction(e)}
      >
        {child}
      </ActButton>
    </ActionContainer>
  );
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
  child: PropTypes.element.isRequired,
};

export default ActionButton;
