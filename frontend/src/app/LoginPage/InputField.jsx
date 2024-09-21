import React from "react";

function InputField({ label, type }) {
  return (
    <div className="input-group">
      <label htmlFor={`${type}Input`} className="input-label">{label}</label>
      <input
        type={type}
        id={`${type}Input`}
        className="input-field"
        placeholder={label}
        aria-label={label}
      />
      <style jsx>{`
        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
        }
        .input-label {
          font-family: Inter, sans-serif;
          line-height: 1;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .input-field {
          border-radius: 3px;
          background-color: #f6f3f3;
          min-height: 30px;
          padding: 5px 10px;
          border: none;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

export default InputField;