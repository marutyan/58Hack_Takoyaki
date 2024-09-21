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
          max-width: 360px;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
          justify-content: center;
          padding: 309px 72px;
        }
      `}</style>
    </>
  );
}

export default LoginScreen;
