"use client";
import React from 'react';
import {useRouter} from 'next/navigation';
import InputField from '../LoginPage/InputField';
import { useForm } from "react-hook-form";
import { useCallback } from "react";

const AccountCreationForm = () => {
  const router = useRouter();
  const { handleSubmit , register} = useForm();
  

  const handleCreationClick = useCallback(async (data) => {
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        // mode: "cors",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error("responseがダメだったみたい", response);
      }else{
        router.push("/PersonalInfoRegistration");
      }
      throw new Error("アカウント作成に失敗しました");
    } catch (error) {
      console.log("catchに入ったよ", error);
    }
  });


  return (
    <form className="form-container" onSubmit={handleSubmit(handleCreationClick)}>
      <InputField
        label="メールアドレス"
        type="email"
        {...register("email", { required: "emailを入力してください" })}
      />
      <InputField
        label="パスワード"
        type="password"
        {...register("password", { required: "パスワードを入力してください" })}
      />
      <InputField
        label="パスワード(確認用)"
        type="password"
      />
      <InputField
        label="アカウント名"
        type="text"
        {...register("account-name", { required: "アカウント名を入力してください" })}
      />
      <button type="submit" className="submit-button">次へ</button>
    </form>
  );
};

export default AccountCreationForm;