import { useState } from 'react';
import PropTypes from 'prop-types';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const handleValueChange = (event) => setValue(event.target.value);
  const clear = () => setValue('');
  return [value, clear];
}

useInput.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};

export default useInput;
