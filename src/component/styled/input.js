import styled from 'styled-components';
import baseColor from '../../utils/base-color';

const Input = styled.input`
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
    display: block;
    width: 100%;
    padding: 8px;
    background-color: transparent;
    border-radius: 8px;
    border: 3px solid ${baseColor.onBackground};
    color: ${baseColor.onBackground};
`;

const InputBody = styled.textarea`
    font-size: ${(props) => props.fontSize};
    margin-top: 8px;
    margin-bottom: 16px;
    display: block;
    width: 100%;
    padding: 8px;
    background-color: transparent;
    border-radius: 8px;
    border: 3px solid ${baseColor.onBackground};
    color: ${baseColor.onBackground};
    min-height: ${(props) => props.minHeight};
`;

InputBody.defaultProps = {
  minHeight: '200px',
  fontSize: '18px',
};

const Form = styled.form`
    margin: ${(props) => props.margin};
    margin-top: ${(props) => props.marginTop};
`;

Form.defaultProps = {
  margin: '32px 0',
  marginTop: '0',
};

export {
  Input,
  InputBody,
  Form,
};
