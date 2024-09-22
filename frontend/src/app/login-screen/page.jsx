"use client";
import React from "react";
import { useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

function LoginScreen() {
  const router = useRouter();
  
  useEffect(() => {
    // 3秒後LoginPage遷移
    const timer = setTimeout(() => {
      router.push("/LoginPage");
    }, 3000); 

    // クリーンアップ関数でタイマーをクリア
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <main className="login-screen">
        <Logo />
      </main>
      <style jsx>{`
         .login-screen {
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center; /* 横方向の中央揃え */
          justify-content: center; /* 縦方向の中央揃え */
          width: 100%; /* 画面幅いっぱいに広げる */
          height: 100vh; /* 画面の高さ全体を使う */
          max-width: 360px; /* 最大幅を設定 */
          padding: 20px; /* 固定パディングを小さくして柔軟に調整 */
          margin: 0 auto; /* 水平方向で中央揃え */
          box-sizing: border-box; /* パディングとボーダーを含めたサイズ調整 */
        }

/* ======= メディアクエリで画面サイズに対応 ======= */

/* スマートフォン (画面幅600px以下) */
@media (max-width: 600px) {
  .login-screen {
    padding: 10px; /* スマホではパディングを小さく */
    max-width: 100%; /* 幅を画面いっぱいに */
  }
}

/* タブレット (画面幅601pxから1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  .login-screen {
    padding: 40px; /* タブレットではパディングを調整 */
    max-width: 90%; /* 幅を少し広げる */
  }
}

/* 大画面 (デスクトップ1025px以上) */
@media (min-width: 1025px) {
  .login-screen {
    padding: 50px 20px; /* デスクトップでは広めのパディング */
    max-width: 50%; /* 幅を50%に設定して中央揃え */
  }
}
      `}</style>
    </>
  );
}

export default LoginScreen;
