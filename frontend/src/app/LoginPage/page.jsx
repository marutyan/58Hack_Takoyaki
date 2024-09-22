"use client";
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useCallback } from "react";

function LoginPage() {
  const router = useRouter();

  const handleCreateAccountClick = (event) => {
    event.preventDefault();
    router.push("/UserTypeSelection");
  }
  

  const { handleSubmit , register} = useForm();

  const handleLoginClick = useCallback(
    async(data) => {
      try{
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),

      })
      if (!response.ok) {
       console.error("responseがダメだったみたい", response);
       alert("ログインに失敗しました");
       throw new Error("ログインに失敗しました");
      }

      

      const userData = await response.json();
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/HomePage");
      console.log("userData", userData);
      
      }catch(error){
        console.log("catchに入ったよ", error);
      }
  });

  return (
    <main className="login-page">
      <h1 className="login-title">ログイン</h1>
      <form className="login-form" onSubmit={handleSubmit(handleLoginClick)}>

        <InputField label="メールアドレス" type="email" {
          ...register("email", { required: "emailを入力してください" })
        }/>
        <InputField label="パスワード" type="password" {
          ...register("password", { required: "パスワードを入力してください" })
        }/>
        
        <a href="#" className="forgot-password">パスワードを忘れた方はこちら</a>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc77a74764ff26f241d9a035ceaad0ce5229f6bdc02975cfe2e76e9ab8960491?placeholderIfAbsent=true&apiKey=c5b43863a5b74dfaac997754dc46d7dc" alt="" className="decorative-image" />
        <Button text="ログイン" onClick={handleLoginClick} />
        <hr className="divider" />
        <a href="#"
        className="create-account"
        onClick={handleCreateAccountClick}
        >
          アカウント作成はこちら
          </a>
      </form>
      <style jsx>{`
        .login-page {
          background-color: #fff;
          display: flex;
          max-width: 360px;
          flex-direction: column;
          overflow: hidden;
          padding: 116px 45px 243px;
        }
        .login-title {
          color: #000;
          text-align: center;
          align-self: center;
          font: 700 30px/1 Inter, sans-serif;
        }
        .login-form {
          border-radius: 4px;
          display: flex;
          margin-top: 57px;
          flex-direction: column;
          padding: 46px 13px 20px;
          font: 14px Noto Sans JP, sans-serif;
          border: 1px solid #b3b3b3;
        }
        .forgot-password {
          color: #636363;
          text-align: center;
          align-self: center;
          margin-top: 5px;
          font: 400 11px/1 Inter, sans-serif;
          text-decoration: none;
        }
        .decorative-image {
          aspect-ratio: 166.67;
          object-fit: contain;
          object-position: center;
          width: 158px;
          align-self: center;
          max-width: 100%;
        }
        .divider {
          margin-top: 30px;
          width: 100%;
          height: 1px;
          border: none;
          background-color: #b3b3b3;
        }
        .create-account {
          color: #636363;
          font-weight: 400;
          align-self: center;
          margin-top: 22px;
          text-decoration: none;
        }
      `}</style>
    </main>
  );
}

export default LoginPage;