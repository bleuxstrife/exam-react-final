import styled from 'styled-components';

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
    background-color: var(--on-background);
    color: var(--background);
    padding: 8px;
    cursor: pointer;
`;

export {
  VoteButton,
  ActButton,
};
