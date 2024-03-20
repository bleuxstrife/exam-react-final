import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { Button } from '../../styled/button';
import { Form, InputBody } from '../../styled/input';
import { PLabel } from '../../styled/label';

function ThreadCommentInput({ submitHandler }) {
  const [content, handleContentChange, clear] = useInput('');

  function onSubmit(event) {
    event.preventDefault();
    submitHandler({ content });
    clear();
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)} margin="0 0" marginTop="32px">
      <PLabel textTransform="uppercase">
        <strong>Beri Komentar</strong>
      </PLabel>
      <InputBody
        minHeight="100px"
        fontSize="14px"
        value={content}
        onChange={handleContentChange}
      />
      <Button fontSize="18px" type="submit">Kirim</Button>
    </Form>
  );
}

ThreadCommentInput.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
