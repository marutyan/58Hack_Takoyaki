"use client";
import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import OptionButton from './OptionButton';
import styles from './styles';
import {useRouter} from 'next/navigation';

const UserTypeSelection = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/AccountCreation');
  }

  return (
    <>
      <main className="user-type-selection">
        <div className="progress-indicators">
          {[true, false, false].map((isActive, index) => (
            <ProgressIndicator key={index} isActive={isActive} />
          ))}
        </div>
        <h1 className="title">あなたは？</h1>
        <form className='form-container'>
          <label htmlFor="studentOption" className="visually-hidden">生徒</label>
          <OptionButton id="studentOption" label="生徒" />
          <label htmlFor="teacherOption" className="visually-hidden">教員</label>
          <OptionButton id="teacherOption" label="教員" />
          <button className="next-button" type="submit" onClick={handleSubmit}>次へ</button>
        </form>
      </main>
      <style jsx global>{styles}</style>
    </>
  );
};

export default UserTypeSelection;