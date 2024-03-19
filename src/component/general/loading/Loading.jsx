import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <LoadingBar
      showFastActions
      style={{ backgroundColor: 'black', height: '3px' }}
    />
  );
}

export default Loading;
