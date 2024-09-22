import React from "react";

function Button({ text }) {
  return (
    <button className="submit-button">
      {text}
      <style jsx>{`
        .submit-button {
          border-radius: 3px;
          background-color: #e29d36;
          min-height: 30px;
          color: #fff;
          padding: 5px 10px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          width: 100%;
          margin-top: 30px;
        }
      `}</style>
    </button>
  );
}

export default Button;