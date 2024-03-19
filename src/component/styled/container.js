import styled from 'styled-components';

const AppContainer = styled.div`
    font-family: 'Inter', sans-serif;
    color: var(--on-background);
    background-color: var(--background);
    min-height: 100vh;
    width: 100%;
    height: 100%;
    transition: all ease-in-out 0.5s;
`;

const MainContainer = styled.main`
    margin: 0 auto;
    padding: 32px 0;
    width: 90%;
    max-width: 1200px;
`;

const PageContainer = styled.section`
    margin: 32px 0;
`;

const ListContainer = styled.div`
    margin-top: 32px;
    padding: 16px 8px;
`;

const ActionContainer = styled.div`
    position: fixed;
    display: flex;
    gap: 16px;
    bottom: 32px;
    right: 32px;
`;

export {
  AppContainer,
  MainContainer,
  PageContainer,
  ListContainer,
  ActionContainer,
};
