"use client";
import React from 'react';
import {useRouter} from 'next/navigation';
import InputField from '../LoginPage/InputField';
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import Select from './Select';

const AccountCreationForm = () => {
  const router = useRouter();
  const { handleSubmit , register} = useForm();
  

  const handleCreationClick = useCallback(async (data) => {
    try {
      const response = await fetch("http://localhost:8000/sign_up", {
        method: "POST",
        // mode: "cors",
        // credentials: true ,
        headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
         },
        body: JSON.stringify({ user: data }),
      });

      console.log(JSON.stringify({ user: data }),);

      if (!response.ok) {
        console.error("responseがダメだったみたい", response);
      }else{
        router.push("/PersonalInfoRegistration");
        console.log("responseがOKだったみたい", response);
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
        id="emailInput"
        {...register("email", { required: "emailを入力してください" })}
      />
      <InputField
        label="パスワード"
        type="password"
        id="passwordInput"
        {...register("password", { required: "パスワードを入力してください" })}
      />
      <InputField
        label="パスワード(確認用)"
        type="password"
        id="Confirmationpassword"
      />
      <InputField
        label="アカウント名"
        type="text"
        id="name"
        {...register("name", { required: "アカウント名を入力してください" })}
      />
      
      <Select
      label="学年"
      id="grade"
      {...register("age", { required: "学年を入力してください" })}
      >
        <option value="高校１年生">高校１年生</option>
        <option value="高校２年生">高校２年生</option>
        <option value="高校３年生">高校３年生</option>
      </Select>
      
      <Select
      label="性別"
      id="gender"
      {...register("gender", { required: "性別を入力してください" })}
      >
        <option value="男">男</option>
        <option value="女">女</option>
      </Select>

      <button type="submit" className="submit-button">次へ</button>
    </form>
  );
};

export default AccountCreationForm;