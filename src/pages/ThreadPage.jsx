import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from '../component/general/button/ActionButton';
import { asyncPopulateThreadAndUser } from '../states/shared/action';
import ThreadList from '../component/general/list/ThreadList';
import { asyncDownVote, asyncNeutralVote, asyncUpVote } from '../states/thread/action';
import { PageContainer } from '../component/styled/container';
import { H2Label } from '../component/styled/label';

function ThreadPage() {
  const authUser = useSelector((states) => states.authUser);
  const users = useSelector((state) => state.users);
  const threads = useSelector((state) => state.threads);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorString = 'Harus login terlebih dahulu';

  React.useEffect(() => {
    dispatch(asyncPopulateThreadAndUser());
  }, [dispatch]);

  const toAddThread = () => {
    navigate('/add-thread');
  };

  const upVote = (id) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncUpVote({ id }));
  };

  const downVote = (id) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncDownVote({ id }));
  };

  const neutralVote = (id, fromUpVote) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncNeutralVote({ id, fromUpVote }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser?.id,
  }));

  return (
    <PageContainer>
      <H2Label>Semua Diskusi</H2Label>
      <ThreadList
        threads={threadList}
        upVote={upVote}
        downVote={downVote}
        neutralVote={neutralVote}
      />
      {authUser && (
      <ActionButton
        title="Tambah Thread"
        onClickAction={toAddThread}
        child={<FiPlus />}
      />
      )}
    </PageContainer>
  );
}

export default ThreadPage;
