import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../component/general/input/ThreadInput';
import { asyncAddThread } from '../states/thread/action';
import { PageContainer } from '../component/styled/container';
import { H2Label } from '../component/styled/label';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const callback = () => {
    navigate('/');
  };
  const sumbitHandler = ({ title, category, body }) => {
    dispatch(asyncAddThread({
      title, body, category, callback,
    }));
  };

  return (
    <PageContainer>
      <H2Label>Buat Diskusi Baru</H2Label>
      <ThreadInput submitHandler={sumbitHandler} />
    </PageContainer>
  );
}

export default AddThreadPage;
