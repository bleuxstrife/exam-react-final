import styled from 'styled-components';
import baseColor from '../../utils/base-color';

const TopBar = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid ${baseColor.onBackground};
`;

const TitleBar = styled.h2`
    flex: 1;
    text-transform: uppercase;
    z-index: 1;
`;

const Li = styled.li`
    display: inline-block;
    font-size: 30px;
    margin: 0 8px;
`;

const NavButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: transparent;
    border: 0;
    margin-left: 20px;
    font-size: 20px;
    cursor: pointer;
    color: ${baseColor.onBackground};
`;

const NavImg = styled.img`
    width: 20px;
    border-radius: 50%;
`;

export {
  Li,
  TopBar,
  TitleBar,
  NavButton,
  NavImg,
};
