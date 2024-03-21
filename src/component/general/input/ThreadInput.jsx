import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { Button } from '../../styled/button';
import { Form, Input, InputBody } from '../../styled/input';

function ThreadInput({ submitHandler }) {
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');
  const [category, handleCategoryChange] = useInput('');

  function onSubmit(event) {
    event.preventDefault();
    submitHandler({ title, category, body });
  }

  return (
    <Form>
      <Input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={handleTitleChange}
      />
      <Input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={handleCategoryChange}
      />
      <InputBody
        value={body}
        onChange={handleBodyChange}
      />
      <Button type="button" onClick={(e) => onSubmit(e)}>Tambahkan</Button>
    </Form>

  );
}

ThreadInput.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default ThreadInput;
