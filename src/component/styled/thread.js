import styled from 'styled-components';
import baseColor from '../../utils/base-color';
import { NavImg } from './navigation';

const ThreadContainer = styled.div`
    padding: 16px;
    margin-bottom: 24px;
    border-radius: 8px;
    border: 1px solid ${baseColor.onBackground};
    border-top: 5px solid;
`;

const ThreadHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ThreadTitle = styled.h3`
    flex: 1;
    margin: 4px 0;
    font-size: 18px;
`;

const ThreadTitleH2 = styled.h2`
    flex: 1;
    font-size: 25px;
    margin-bottom: 8px;
    word-wrap: break-word;
`;

const ThreadBody = styled.div`
    font-size: ${(props) => (props.isShort ? '14px' : '18px')};
    margin-top: 16px;
    overflow: ${(props) => (props.isShort ? 'hidden' : 'none')};
    display: -webkit-box;
    text-overflow: ${(props) => (props.isShort ? 'ellipsis' : 'none')};
    -webkit-line-clamp: ${((props) => (props.isShort ? '4' : 'none'))};
    -webkit-box-orient: vertical;
`;

ThreadBody.defaultProps = {
  isShort: true,
};

const ThreadFooter = styled.div`
    align-items: center;
    display: flex;
    font-size: ${(props) => props.fontSize};
    gap: 12px;
    margin-top: ${(props) => props.marginTop};   
`;

ThreadFooter.defaultProps = {
  marginTop: '16px',
  fontSize: '14px',
};

const ThreadSubInfo = styled(ThreadFooter)`
    font-size: 16px;
    margin-top: 32px;   
`;

const ThreadCommentDetail = styled.div`
    margin-top: 32px;
`;

const ThreadComment = styled.div`
    align-items: center;
    display: flex;
    gap: 4px;
`;

const CommentContainer = styled(ThreadContainer)`

`;

const CommentHeader = styled.div`
    align-items: center;
    display: flex;
`;

const CommentOwner = styled(CommentHeader)`
    flex: 1 1;
    font-weight: 600;
    gap: 8px;
`;

const CommentBody = styled.div`
    margin: 16px 8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

const CommentOwnerImg = styled(NavImg)`
    width: 45px;
`;

const CommentFooter = styled(ThreadFooter)`
    font-size: 14px;
    margin-left: 8px;  
`;

export {
  ThreadContainer,
  ThreadHeader,
  ThreadTitle,
  ThreadTitleH2,
  ThreadSubInfo,
  ThreadBody,
  ThreadFooter,
  ThreadComment,
  ThreadCommentDetail,
  CommentContainer,
  CommentHeader,
  CommentOwner,
  CommentOwnerImg,
  CommentBody,
  CommentFooter,
};
