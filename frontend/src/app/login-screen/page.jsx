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
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
          max-width: 360px;
          padding: 20px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        @media (max-width: 600px) {
          .login-screen {
          padding: 10px; 
          max-width: 100%;
        }
        }
        
        @media (min-width: 601px) and (max-width: 1024px) {
        .login-screen {
        padding: 40px;
        max-width: 90%;
        }
        }

        @media (min-width: 1025px) {
        .login-screen {
        padding: 50px 20px; 
        max-width: 100%;
        }
        }

      `}</style>
    </>
  );
}

export default LoginScreen;
