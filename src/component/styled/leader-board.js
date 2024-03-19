import styled from 'styled-components';

const LeaderBHeader = styled.header`
    display: flex;
    font-size: 18px;
    padding: 8px 0px;
    text-decoration: none;
    border-bottom: none;
`;

const LeaderBContainer = styled.div`
    align-items: center;
    display: flex;
`;

const LeaderBUserInfo = styled.div`
    align-items: center;
    display: flex;
    flex: 1 1;
    gap: 8px;
`;

const LeaderBImg = styled.img`
    border-radius: 50%;
    width: 45px;
`;

export {
  LeaderBHeader,
  LeaderBContainer,
  LeaderBUserInfo,
  LeaderBImg,
};
