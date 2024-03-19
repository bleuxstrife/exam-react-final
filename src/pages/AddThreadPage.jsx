import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../component/general/input/ThreadInput';
import { asyncAddThread } from '../states/thread/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sumbitHandler = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="add-thread-page">
      <h2>Buat Diskusi Baru</h2>
      <ThreadInput submitHandler={sumbitHandler} />
    </section>
  );
}

export default AddThreadPage;
