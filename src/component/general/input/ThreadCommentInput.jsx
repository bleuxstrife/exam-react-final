import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';

function ThreadCommentInput({ submitHandler }) {
  const [content, handleContentChange, clear] = useInput('');

  function onSubmit(event) {
    event.preventDefault();
    submitHandler({ content });
    clear();
  }

  return (
    <form onSubmit={onSubmit} className="detail-thread__comment-input">
      <p className="detail-add-comment__label">
        <strong>Beri Komentar</strong>
      </p>
      <textarea
        className="detail-add-comment__input-content"
        value={content}
        onChange={handleContentChange}
      />
      <button type="submit">Kirim</button>
    </form>
  );
}

ThreadCommentInput.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
