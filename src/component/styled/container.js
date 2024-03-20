import styled from 'styled-components';

const AppContainer = styled.div`
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
    margin-top: ${(props) => props.marginTop};
    padding: ${(props) => (props.withPadding ? '16px 8px' : 'none')};
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    gap: ${(props) => props.gap};
`;

ListContainer.defaultProps = {
  marginTop: '32px',
  withPadding: true,
  flexDirection: 'none',
  gap: 'none',
  display: 'block',
};

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
