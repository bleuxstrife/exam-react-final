import styled from 'styled-components';
import baseColor from '../../utils/base-color';

const VoteButton = styled.button`
    align-items: center;
    background-color: initial;
    border: 0;
    cursor: pointer;
    display: flex
`;

const ActButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    border: 0;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: ${baseColor.onBackground};
    color: ${baseColor.background};
    padding: 8px;
    cursor: pointer;
`;

const Button = styled.button`
    font-weight: bold;
    font-size: ${(props) => props.fontSize};
    width: 100%;
    padding: 12px;
    border: 0;
    border-radius: 8px;
    background-color: ${baseColor.onBackground};
    color: ${baseColor.background};
    cursor: pointer;
`;

Button.defaultProps = {
  fontSize: '20px',
};

export {
  VoteButton,
  ActButton,
  Button,
};
