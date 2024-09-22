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
          flex-direction: column;
          align-items: center; /* 横方向に中央揃え */
          justify-content: center; /* 縦方向に中央揃え */
          width: 100%;
          max-width: 360px;
          padding: 20px; /* パディングを柔軟に設定 */
          margin: 0 auto; /* 中央揃え */
          height: 100vh; /* 画面の高さ全体を使う */
       }

        .login-title {
          color: #000;
          text-align: center;
          font: 700 30px/1 Inter, sans-serif;
          margin-bottom: 20px; /* 下にスペースを追加 */
       }

        .login-form {
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          padding: 46px 13px 20px;
          font: 14px Noto Sans JP, sans-serif;
          border: 1px solid #b3b3b3;
          width: 100%; /* 幅を100%に */
          max-width: 360px; /* 最大幅を設定 */
       }

        .forgot-password {
          color: #636363;
          text-align: center;
          margin-top: 5px;
          font: 400 11px/1 Inter, sans-serif;
          text-decoration: none;
        }

        .decorative-image {
          aspect-ratio: 166.67;
          object-fit: contain;
          width: 158px;
          max-width: 100%;
          margin-bottom: 20px; /* 下にスペースを追加 */
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
  text-decoration: none;
  margin-top: 22px;
  text-align: center;
}

/* ======= メディアクエリ ======= */

/* スマートフォン (600px以下) */
@media (max-width: 600px) {
  .login-page {
    padding: 10px; /* パディングを縮小 */
  }

  .login-form {
    padding: 30px 10px; /* フォームのパディングを縮小 */
  }

  .login-title {
    font-size: 24px; /* タイトルのフォントサイズを縮小 */
  }
}

/* タブレット (601pxから1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  .login-page {
    max-width: 90%; /* 幅を90%に設定し、中央揃え */
    padding: 40px; /* パディングを調整 */
  }

  .login-title {
    font-size: 28px; /* タイトルのフォントサイズを少し小さく */
  }

  .login-form {
    padding: 40px 20px; /* フォームのパディングを調整 */
  }
}

/* 大画面 (デスクトップ 1025px以上) */
@media (min-width: 1025px) {
  .login-page {
    max-width: 50%; /* デスクトップでは50%の幅に */
    padding: 60px 20px; /* パディングを増加 */
  }

  .login-title {
    font-size: 30px; /* タイトルのフォントサイズを維持 */
  }

  .login-form {
    padding: 50px 30px; /* 快適なスペースを提供 */
  }
}
      `}</style>
    </main>
  );
}

export default LoginPage;