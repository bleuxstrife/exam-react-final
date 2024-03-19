import styled from 'styled-components';
import baseColor from '../../utils/base-color';

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

const ThreadBody = styled.div`
    font-size: 14px;
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
    font-size: 14px;
    gap: 12px;
    margin-top: 16px;   
`;

const ThreadComment = styled.div`
    align-items: center;
    display: flex;
    gap: 4px;
`;

export {
  ThreadContainer,
  ThreadHeader,
  ThreadTitle,
  ThreadBody,
  ThreadFooter,
  ThreadComment,
};
