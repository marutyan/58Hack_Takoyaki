"use client";
import React from 'react';
import FormField from './FormField';
import {useRouter} from 'next/navigation';

const AccountCreationForm = () => {
  const router = useRouter();
  const fields = [
    { label: 'メールアドレス', id: 'email', type: 'email' },
    { label: 'パスワード', id: 'password', type: 'password' },
    { label: 'パスワード(確認用)', id: 'password-confirm', type: 'password' },
    { label: 'アカウント名', id: 'account-name' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/PersonalInfoRegistration');
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField key={field.id} {...field} />
      ))}
      <button type="submit" className="submit-button">次へ</button>
    </form>
  );
};

export default AccountCreationForm;