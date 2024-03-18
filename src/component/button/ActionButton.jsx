import React from 'react';
import PropTypes from 'prop-types';

function ActionButton({
  className, title, onClickAction, child,
}) {
  return (
    <div className={className}>
      <button
        className="action"
        type="button"
        title={title}
        onClick={(e) => onClickAction(e)}
      >
        {child}
      </button>
    </div>
  );
}

ActionButton.defaultProps = {
  className: null,
};

ActionButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
  child: PropTypes.element.isRequired,
};

export default ActionButton;
