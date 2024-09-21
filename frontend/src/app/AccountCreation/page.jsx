"use client";
import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import AccountCreationForm from './AccountCreationForm';
import styles from './styles';

const AccountCreationScreen = () => {
  return (
    <>
      <main className="account-creation-screen">
        <div className="progress-indicators">
          <ProgressIndicator />
          <ProgressIndicator active />
          <ProgressIndicator />
        </div>
        <h1 className="page-title">アカウント作成</h1>
        <AccountCreationForm />
      </main>
      <style jsx global>{styles}</style>
    </>
  );
};

export default AccountCreationScreen;