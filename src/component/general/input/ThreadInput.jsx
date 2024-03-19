import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';

function ThreadInput({ submitHandler }) {
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');
  const [category, handleCategoryChange] = useInput('');

  function onSubmit(event) {
    event.preventDefault();
    submitHandler({ title, category, body });
  }

  return (
    <form onSubmit={onSubmit} className="add-thread-page__input">
      <input
        className="add-thread-page__input_title"
        type="text"
        placeholder="Judul"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        className="add-thread-page__input_category"
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={handleCategoryChange}
      />
      <textarea
        className="add-thread-page__input__body"
        value={body}
        onChange={handleBodyChange}
      />
      <button type="submit">Tambahkan</button>
    </form>

  );
}

ThreadInput.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default ThreadInput;
