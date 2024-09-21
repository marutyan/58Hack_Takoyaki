"use client";
import React from "react";

function Logo() {
  return (
    <>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4107d43ed4bca4d3f06c0b042c42b72aae9793412af33805f435645d3d13638?placeholderIfAbsent=true&apiKey=c5b43863a5b74dfaac997754dc46d7dc" alt="Company logo" className="logo" />
      <style jsx>{`
        .logo {
          aspect-ratio: 1.07;
          object-fit: contain;
          object-position: center;
          width: 195px;
          max-width: 100%;
        }
      `}</style>
    </>
  );
}

export default Logo;