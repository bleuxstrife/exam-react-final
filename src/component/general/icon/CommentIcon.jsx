import React from 'react';
import { SlActionUndo } from 'react-icons/sl';
import StyledIcon from '../../styled/icon.tsx';

function CommentIcon() {
  return (
    <StyledIcon iconSize={16} needMargin={false}>
      <SlActionUndo />
    </StyledIcon>
  );
}

export default CommentIcon;
