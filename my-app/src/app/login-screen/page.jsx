"use client";
import React from "react";
import Logo from "./Logo";

function LoginScreen() {
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
